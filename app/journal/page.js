import { auth, signIn, signOut } from "@/auth";
import { getNotes } from "@/lib/supabase";
import { createNote, removeNote } from "./actions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Journal — Neha Khare",
  robots: { index: false, follow: false },
};

function formatWhen(iso) {
  const then = new Date(iso);
  const now = new Date();
  const diffMs = now - then;
  const min = Math.round(diffMs / 60000);
  const abs = then.toLocaleString();
  if (min < 1) return { rel: "just now", abs };
  if (min < 60) return { rel: `${min} min ago`, abs };
  const hr = Math.round(min / 60);
  if (hr < 24) return { rel: `${hr} hour${hr === 1 ? "" : "s"} ago`, abs };
  const day = Math.round(hr / 24);
  if (day < 7) return { rel: `${day} day${day === 1 ? "" : "s"} ago`, abs };
  return { rel: then.toLocaleDateString(), abs };
}

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
          <p style={{ marginTop: 24 }}>
            <a className="link" href="/">← Back to resume</a>
          </p>
        </div>
      </div>
    );
  }

  const notes = await getNotes();

  return (
    <div className="journal">
      <div className="journal-head">
        <h1>Journal</h1>
        <div className="journal-actions">
          <a className="link" href="/">← Resume</a>
          <span className="journal-user">{session.user.email}</span>
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
          <p className="empty">No notes yet.</p>
        ) : (
          notes.map((n) => {
            const t = formatWhen(n.created_at);
            return (
              <div className="entry" key={n.id}>
                <div className="entry-body">
                  <div className="content">{n.content}</div>
                  <time title={t.abs}>{t.rel}</time>
                </div>
                <form action={removeNote}>
                  <input type="hidden" name="id" value={n.id} />
                  <button className="btn-icon" type="submit" aria-label="Delete note" title="Delete note">
                    ✕
                  </button>
                </form>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
