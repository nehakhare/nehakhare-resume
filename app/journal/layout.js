import { Newsreader } from "next/font/google";

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function JournalLayout({ children }) {
  return (
    <div className={`journal-theme ${serif.className}`}>
      <div className="journal-bg" aria-hidden="true" />
      <div className="journal-overlay" aria-hidden="true" />
      {children}
    </div>
  );
}
