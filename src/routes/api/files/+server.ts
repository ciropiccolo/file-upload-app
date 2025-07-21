import { prisma } from "$lib/db";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const files = await prisma.upload.findMany({
    orderBy: { createdat: "desc" },
  });
  return new Response(JSON.stringify(files));
};
