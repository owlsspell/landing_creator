import { usersJsonDB } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const orgId = req.nextUrl.searchParams.get("orgId");
  const result = await usersJsonDB.findOne({ orgId });
  if (result) {
    return NextResponse.json(result.json);
  } else {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
};

export const POST = async (req: NextRequest) => {
  const { orgId, json, logoUrl, heroUrl } = await req.json();
  const result = await usersJsonDB.replaceOne(
    { orgId },
    { orgId, logo: logoUrl, background: heroUrl, json },
    { upsert: true }
  );

  return NextResponse.json(result);
};
