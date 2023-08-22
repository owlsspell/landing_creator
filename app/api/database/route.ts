import { usersJsonDB } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const userId = req.nextUrl.searchParams.get("userId");
  const result = await usersJsonDB.findOne({ userId });
  if (result) {
    return NextResponse.json(result.json);
  } else {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
};

export const POST = async (req: NextRequest) => {
  const { userId, json } = await req.json();
  const result = await usersJsonDB.replaceOne(
    { userId },
    { userId, json },
    { upsert: true }
  );

  return NextResponse.json(result);
};
