import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";

export const POST = async (req: NextRequest) => {
  const digitalOceanSpaces = process.env.NEXT_PUBLIC_ENDPOINT;
  const bucketName = process.env.NEXT_PUBLIC_BUCKETNAME;

  const spacesEndpoint = new AWS.Endpoint("nyc3.digitaloceanspaces.com");

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  });

  const folder = "public/images/captiveportal/merchants/";

  const formData = await req.formData();
  const orgId = formData.get("orgId");
  const file = formData.get("file") as File;
  const name = formData.get("name") as String;
  const dir = formData.get("dir") as String;

  const fileName = name
    ? folder + orgId + "/" + dir + "/" + Date.now() + name.replaceAll(" ", "_")
    : name;

  const buffer = Buffer.from(await file.arrayBuffer());

  const params: any = {
    Body: buffer,
    Bucket: bucketName,
    Key: fileName,
  };

  try {
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
          return NextResponse.next();
        }
      });
  } catch (err) {
    return NextResponse.json({
      message: "Failed to load image",
      status: 500,
    });
  }

  const imageUrl = `${process.env.NEXT_PUBLIC_ENDPOINT}/${fileName}`;

  return NextResponse.json({
    imageUrl,
    name: fileName,
    message: "Uploaded successfully",
  });
};

export const GET = async (req: NextRequest) => {
  const orgId = req.nextUrl.searchParams.get("orgId");
  const dir = req.nextUrl.searchParams.get("directory");

  const bucket = process.env.NEXT_PUBLIC_BUCKETNAME;
  const spacesEndpoint = new AWS.Endpoint("nyc3.digitaloceanspaces.com");

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  });

  const path_to_folder =
    "public/images/captiveportal/merchants/" + orgId + "/" + dir + "/";

  const params = {
    Bucket: bucket as string,
    Prefix: path_to_folder,
  };
  let result;
  await new Promise((response) =>
    s3.listObjects(params, async function (err, data) {
      if (err) {
        console.log("Could not load objects from S3", err);
        response({ Message: "Failed", status: 500 });
        return NextResponse.json({ Message: "Failed", status: 500 });
      } else {
        result = data.Contents;
      }
      response(data.Contents);
    })
  );
  return NextResponse.json(result);
};
