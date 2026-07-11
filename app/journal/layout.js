import { Newsreader } from "next/font/google";

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function JournalLayout({ children }) {
  return (
    <div className={`journal-theme ${serif.className}`}>
      <video
        className="journal-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="/journal-poster.jpg"
        aria-hidden="true"
      >
        <source src="/journal-bg.mp4" type="video/mp4" />
      </video>
      <div className="journal-overlay" aria-hidden="true" />
      <a
        className="journal-credit"
        href="https://commons.wikimedia.org/wiki/File:2022-08-06,_Pacific_Ocean_sunset_(Ocean_Shores,_Washington),_01.webm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Video: Steven Pavlov / CC BY 3.0
      </a>
      {children}
    </div>
  );
}
