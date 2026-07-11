import { auth, signIn, signOut } from "@/auth";
import { getNotes } from "@/lib/supabase";
import { createNote, removeNote } from "./actions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Journal — Neha Khare",
  robots: { index: false, follow: false },
};

const TZ = "America/Los_Angeles";

function dayKey(d) {
  return d.toLocaleDateString("en-CA", { timeZone: TZ }); // YYYY-MM-DD
}
function dayLabel(d) {
  return d.toLocaleDateString("en-US", {
    timeZone: TZ,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
function timeLabel(d) {
  return d.toLocaleTimeString("en-US", {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
  });
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
  const todayKey = dayKey(new Date());

  // Group notes (already sorted newest-first) by calendar day.
  const order = [];
  const groups = new Map();
  for (const n of notes) {
    const d = new Date(n.created_at);
    const key = dayKey(d);
    if (!groups.has(key)) {
      groups.set(key, { label: dayLabel(d), items: [] });
      order.push(key);
    }
    groups.get(key).items.push(n);
  }

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
        <textarea name="content" placeholder="What happened today?" required />
        <div>
          <button className="btn" type="submit">Add entry</button>
        </div>
      </form>

      <div>
        {notes.length === 0 ? (
          <p className="empty">No entries yet. Start with today&apos;s note above.</p>
        ) : (
          order.map((key) => {
            const g = groups.get(key);
            return (
              <section className="day-group" key={key}>
                <h3 className="day-date">
                  {g.label}
                  {key === todayKey && <span className="day-today">Today</span>}
                </h3>
                {g.items.map((n) => {
                  const d = new Date(n.created_at);
                  return (
                    <div className="entry" key={n.id}>
                      <div className="entry-body">
                        <div className="content">{n.content}</div>
                        <time title={d.toLocaleString("en-US", { timeZone: TZ })}>
                          {timeLabel(d)}
                        </time>
                      </div>
                      <form action={removeNote}>
                        <input type="hidden" name="id" value={n.id} />
                        <button
                          className="btn-icon"
                          type="submit"
                          aria-label="Delete entry"
                          title="Delete entry"
                        >
                          ✕
                        </button>
                      </form>
                    </div>
                  );
                })}
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}
