import { prisma } from "$lib/db";
import type { RequestHandler } from "@sveltejs/kit";
import fs from "fs";
import path from "path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Buffer } from "buffer";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.formData();
  const title = data.get("title") as string;
  const description = data.get("description") as string;
  const category = data.get("category") as string;
  const language = data.get("language") as string;
  const provider = data.get("provider") as string;
  const roles = JSON.parse(data.get("roles") as string);
  const file = data.get("file") as File;

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}_${file.name}`;

  let uploadedToS3 = false;

  try {
    const s3 = new S3Client();

    const command = new PutObjectCommand({
      Bucket: "mypoccpack",
      Key: filename,
      Body: buffer,
      ContentType: file.type,
      ACL: "public-read",
    });

    const response = await s3.send(command);
    console.log("Upload S3 riuscito:", response);
    uploadedToS3 = true;
  } catch (error) {
    console.error("Errore upload S3, salvo in locale:", error);

    const filepath = path.join("static/uploads", filename);
    fs.writeFileSync(filepath, buffer);
    console.log("File salvato localmente:", filepath);
  }

  try {
    const result = await prisma.upload.create({
      data: {
        title,
        description,
        category,
        language,
        provider,
        roles,
        filename,
      },
    });
    console.log("Record DB creato:", result);
  } catch (e) {
    console.error("Errore salvataggio DB:", e);
    return new Response("Errore salvataggio DB", { status: 500 });
  }

  return new Response(JSON.stringify({ success: true, uploadedToS3 }), {
    status: 200,
  });
};
