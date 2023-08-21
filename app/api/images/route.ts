import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import AWS from "aws-sdk";

// export const POST = async (req, res) => {
//   const formData = await req.formData();
//   const file = formData.get("file");
//   const dir = formData.get("dir");

//   if (!file) {
//     return NextResponse.json({ error: "No files received." }, { status: 400 });
//   }

//   const buffer = Buffer.from(await file.arrayBuffer());

//   const filename = Date.now() + file.name.replaceAll(" ", "_");
//   console.log(filename);
//   try {
//     await writeFile(
//       path.join(process.cwd(), `public/uploads/images/${dir}/` + filename),
//       buffer
//     );
//     return NextResponse.json({ Message: "Success", status: 201 });
//   } catch (error) {
//     console.log("Error occured ", error);
//     return NextResponse.json({ Message: "Failed", status: 500 });
//   }
// };

export const POST = async (req: NextRequest) => {
  const digitalOceanSpaces = process.env.NEXT_PUBLIC_ENDPOINT;
  const bucketName = process.env.NEXT_PUBLIC_BUCKETNAME;

  const spacesEndpoint = new AWS.Endpoint("nyc3.digitaloceanspaces.com");

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  });

  const folder = "public-ggg-merchant-info/";
  const formData = await req.formData();

  const dir = formData.get("dir");

  const file = formData.get("file") as File;
  const name = formData.get("name") as String;

  const fileName = name
    ? folder + dir + "/" + Date.now() + name.replaceAll(" ", "_")
    : name;

  const buffer = Buffer.from(await file.arrayBuffer());

  const params: any = {
    Body: buffer,
    Bucket: bucketName,
    Key: fileName,
  };

  s3.putObject(params)
    .on("build", (request) => {
      request.httpRequest.headers.Host = `${digitalOceanSpaces}`;
      request.httpRequest.headers["Content-Length"] = file.size.toString();
      request.httpRequest.headers["Content-Type"] = file.type;
      request.httpRequest.headers["x-amz-acl"] = "public-read";
    })
    .send((err) => {
      if (err) {
        console.log("errorCallback: " + err);
        return NextResponse.json({ error: err });
      } else {
        const imageUrl = `${process.env.NEXT_PUBLIC_ENDPOINT}/${fileName}`;
        console.log(imageUrl, fileName);
        return NextResponse.json({ imageUrl, name: fileName });
      }
    });
};

export const GET = async () => {
  const imageDirectory = path.join(
    process.cwd(),
    "/public/uploads/images/slowpokes"
  );
  const imageFileNames = await fs.readdir(imageDirectory);
  return NextResponse.json(imageFileNames);
};
