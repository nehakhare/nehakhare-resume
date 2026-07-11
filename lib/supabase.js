const rawUrl = (process.env.SUPABASE_URL || "").replace(/\/+$/, "").replace(/\/rest\/v1$/, "");
const key = process.env.SUPABASE_SECRET_KEY || "";

function headers(extra = {}) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

export async function getNotes() {
  if (!rawUrl || !key) return [];
  try {
    const res = await fetch(
      `${rawUrl}/rest/v1/notes?select=id,content,created_at&order=created_at.desc`,
      { headers: headers(), cache: "no-store" }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function addNote(content) {
  if (!rawUrl || !key) return false;
  try {
    const res = await fetch(`${rawUrl}/rest/v1/notes`, {
      method: "POST",
      headers: headers({ Prefer: "return=minimal" }),
      body: JSON.stringify({ content }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function deleteNote(id) {
  if (!rawUrl || !key) return false;
  try {
    const res = await fetch(
      `${rawUrl}/rest/v1/notes?id=eq.${encodeURIComponent(id)}`,
      { method: "DELETE", headers: headers({ Prefer: "return=minimal" }) }
    );
    return res.ok;
  } catch {
    return false;
  }
}
