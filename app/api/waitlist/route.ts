import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const WAITLIST_FILE = path.join(process.cwd(), "waitlist.json");

interface WaitlistEntry {
  email: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Read existing waitlist or create new one
    let waitlist: WaitlistEntry[] = [];
    try {
      const data = await fs.readFile(WAITLIST_FILE, "utf-8");
      waitlist = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      waitlist = [];
    }

    // Check if email already exists
    const emailExists = waitlist.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 200 }
      );
    }

    // Add new entry
    waitlist.push({
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
    });

    // Save to file
    await fs.writeFile(WAITLIST_FILE, JSON.stringify(waitlist, null, 2));

    return NextResponse.json(
      { message: "Successfully added to waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing waitlist:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
