import { prisma } from "$lib/db";
import type { RequestHandler } from "@sveltejs/kit";
import fs from "fs";
import path from "path";

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
  const filepath = path.join("static/uploads", filename);
  fs.writeFileSync(filepath, buffer);

  await prisma.upload.create({
    data: { title, description, category, language, provider, roles, filename },
  });

  return new Response(JSON.stringify({ success: true }));
};
