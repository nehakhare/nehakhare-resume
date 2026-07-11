import { auth, signIn, signOut } from "@/auth";
import { getNotes } from "@/lib/supabase";
import { createNote } from "./actions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Journal — Neha Khare",
};

export default async function Journal() {
  const session = await auth();
  const email = (session?.user?.email || "").trim().toLowerCase();
  const allowed = (process.env.ALLOWED_EMAIL || "").trim().toLowerCase();
  const authorized = !!email && email === allowed;

  if (!authorized) {
    return (
      <div className="journal">
        <div className="signin-box">
          <h1>Private Journal</h1>
          <p>Sign in with your Google account to continue.</p>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/journal" });
            }}
          >
            <button className="btn" type="submit">Sign in with Google</button>
          </form>
        </div>
      </div>
    );
  }

  const notes = await getNotes();

  return (
    <div className="journal">
      <div className="journal-head">
        <h1>Journal</h1>
        <div>
          <span className="journal-user">{session.user.email}</span>{" "}
          <form
            style={{ display: "inline" }}
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/journal" });
            }}
          >
            <button className="btn secondary" type="submit">Sign out</button>
          </form>
        </div>
      </div>

      <form action={createNote}>
        <textarea name="content" placeholder="Write a note..." required />
        <div>
          <button className="btn" type="submit">Save note</button>
        </div>
      </form>

      <div>
        {notes.length === 0 ? (
          <p style={{ color: "#565656" }}>No notes yet.</p>
        ) : (
          notes.map((n) => (
            <div className="entry" key={n.id}>
              <div className="content">{n.content}</div>
              <time>{new Date(n.created_at).toLocaleString()}</time>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
