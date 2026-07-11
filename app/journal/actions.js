"use server";

import { auth } from "@/auth";
import { addNote, deleteNote } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

async function isAuthorized() {
  const session = await auth();
  const email = (session?.user?.email || "").trim().toLowerCase();
  const allowed = (process.env.ALLOWED_EMAIL || "").trim().toLowerCase();
  return !!email && email === allowed;
}

export async function createNote(formData) {
  if (!(await isAuthorized())) return;

  const content = (formData.get("content") || "").toString().trim();
  if (!content) return;

  await addNote(content);
  revalidatePath("/journal");
}

export async function removeNote(formData) {
  if (!(await isAuthorized())) return;

  const id = (formData.get("id") || "").toString().trim();
  if (!id) return;

  await deleteNote(id);
  revalidatePath("/journal");
}
