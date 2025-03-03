import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Extract username from the query parameters
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    // Construct the Duolingo API URL
    const apiUrl = `https://www.duolingo.com/2017-06-30/users?username=${username}&fields=streak,streakData%7BcurrentStreak,previousStreak%7D%7D`;

    // Fetch data from Duolingo
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch Duolingo data");

    const data = await response.json();

    // Set CORS headers to allow frontend requests
    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
