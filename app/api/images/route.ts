import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { promises as fs } from "fs";

export const POST = async (req, res) => {
  const formData = await req.formData();
  const file = formData.get("file");
  const dir = formData.get("dir");

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), `public/uploads/images/${dir}/` + filename),
      buffer
    );
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

export const GET = async (req, res) => {
  const imageDirectory = path.join(
    process.cwd(),
    "/public/uploads/images/slowpokes"
  );
  const imageFileNames = await fs.readdir(imageDirectory);
  return NextResponse.json(imageFileNames);
};
