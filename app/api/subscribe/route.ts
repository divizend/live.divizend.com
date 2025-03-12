import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/divizend";
const CLOUDFLARE_TURNSTILE_SECRET_KEY =
  process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

let client: MongoClient;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
  }
  return client;
}

async function verifyTurnstileToken(token: string) {
  /*const formData = new FormData();
  formData.append(
    "secret",
    CLOUDFLARE_TURNSTILE_SECRET_KEY || "dummy_secret_key"
  );
  formData.append("response", token);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const outcome = await result.json();
  return outcome.success;*/
  return true;
}

export async function POST(request: Request) {
  try {
    const { email, token } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    /*if (!token) {
      return NextResponse.json(
        { message: "Captcha verification token is required" },
        { status: 400 }
      );
    }*/

    const isTokenValid = await verifyTurnstileToken(token);
    if (!isTokenValid) {
      return NextResponse.json(
        { message: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // Connect to MongoDB and save the email
    const client = await connectToDatabase();
    const db = client.db();

    // Check if email already exists
    const existingEmail = await db.collection("waitlist").findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    // Insert new email with timestamp
    await db.collection("waitlist").insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in subscribe endpoint:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
