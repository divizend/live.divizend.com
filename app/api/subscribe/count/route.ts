import { NextResponse } from "next/server";
import { getSubscribedEmailCount } from "@/app/lib/redis";
import { ErrorMessage } from "@/app/types";

export async function GET() {
  try {
    // Get count of subscribed emails
    const count = await getSubscribedEmailCount();

    // Return count as JSON
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error in get subscriber count endpoint:", error);
    return NextResponse.json(
      { message: ErrorMessage.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}
