import "./globals.css";
import ThemeToggle from "./ThemeToggle";

const siteUrl = "https://www.nehakhare.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neha Khare — Software Engineer II",
    template: "%s",
  },
  description:
    "Neha Khare — Software Engineer II at Microsoft. Cloud-native services, distributed systems, big data, and reliability engineering.",
  keywords: [
    "Neha Khare",
    "Software Engineer",
    "Microsoft",
    "Azure",
    "Distributed Systems",
    "Cloud",
    "Resume",
  ],
  authors: [{ name: "Neha Khare" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: "Neha Khare — Software Engineer II",
    description:
      "Software Engineer II at Microsoft — cloud-native services, distributed systems, and reliability engineering.",
    url: siteUrl,
    siteName: "Neha Khare",
    images: [{ url: "/headshot.png", width: 400, height: 400, alt: "Neha Khare" }],
  },
  twitter: {
    card: "summary",
    title: "Neha Khare — Software Engineer II",
    description:
      "Software Engineer II at Microsoft — cloud-native services, distributed systems, and reliability engineering.",
    images: ["/headshot.png"],
  },
};

const themeInit = `
try {
  var t = localStorage.getItem('theme');
  if (!t) t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <div className="topbar">
          <a className="topbar-link" href="/resume">Résumé</a>
          <a className="topbar-link" href="/journal">Journal</a>
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
