import "./globals.css";

export const metadata = {
  title: "Neha Khare — Software Engineer II",
  description: "Resume of Neha Khare, Software Engineer II.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
