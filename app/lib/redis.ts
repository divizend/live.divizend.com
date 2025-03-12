import { createClient } from "redis";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
let redisClient: ReturnType<typeof createClient>;

export async function connectToRedis() {
  if (!redisClient) {
    redisClient = createClient({
      url: REDIS_URL,
    });

    // Set up error handling
    redisClient.on("error", (err) => console.error("Redis Client Error", err));

    await redisClient.connect();
  }

  return redisClient;
}

export async function getAllSubscribedEmails(): Promise<string[]> {
  // Connect to Redis
  const redisClient = await connectToRedis();

  // Get all emails from the set
  const waitlistKey = "waitlist:emails";
  const emails = await redisClient.sMembers(waitlistKey);

  return emails;
}

export async function getSubscribedEmailCount(): Promise<number> {
  // Connect to Redis
  const redisClient = await connectToRedis();

  // Get count of emails in the set
  const waitlistKey = "waitlist:emails";
  const count = await redisClient.sCard(waitlistKey);

  return count;
}
