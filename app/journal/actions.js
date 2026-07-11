"use server";

import { auth } from "@/auth";
import { addNote } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createNote(formData) {
  const session = await auth();
  const email = (session?.user?.email || "").trim().toLowerCase();
  const allowed = (process.env.ALLOWED_EMAIL || "").trim().toLowerCase();
  if (!email || email !== allowed) return;

  const content = (formData.get("content") || "").toString().trim();
  if (!content) return;

  await addNote(content);
  revalidatePath("/journal");
}
