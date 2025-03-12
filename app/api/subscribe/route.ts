import { NextResponse } from "next/server";
import { connectToRedis, getAllSubscribedEmails } from "@/app/lib/redis";
import { ErrorMessage, SuccessMessage } from "@/app/types";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: ErrorMessage.EMAIL_REQUIRED },
        { status: 400 }
      );
    }

    // Connect to Redis
    const redisClient = await connectToRedis();

    // Use a set to store unique emails
    const waitlistKey = "waitlist:emails";

    // Check if email already exists in the set
    console.log(await redisClient.sMembers(waitlistKey));
    const emailExists = await redisClient.sIsMember(waitlistKey, email);
    if (emailExists) {
      return NextResponse.json(
        { message: ErrorMessage.EMAIL_ALREADY_REGISTERED },
        { status: 409 }
      );
    }

    // Add email to the set
    await redisClient.sAdd(waitlistKey, email);

    // Store additional metadata in a hash
    await redisClient.hSet(`waitlist:meta:${email}`, {
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: SuccessMessage.SUBSCRIPTION_SUCCESSFUL,
    });
  } catch (error) {
    console.error("Error in subscribe endpoint:", error);
    return NextResponse.json(
      { message: ErrorMessage.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("Authorization");

    // Check if the authorization header matches the expected value
    if (authHeader !== "Bearer " + process.env.API_KEY) {
      return NextResponse.json(
        { message: ErrorMessage.UNAUTHORIZED },
        { status: 401 }
      );
    }

    // Get all emails
    const emails = await getAllSubscribedEmails();

    // Return emails as JSON array
    return NextResponse.json(emails);
  } catch (error) {
    console.error("Error in list emails endpoint:", error);
    return NextResponse.json(
      { message: ErrorMessage.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}
