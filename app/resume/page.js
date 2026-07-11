import { resumeHtml } from "@/app/resumeHtml";

export const metadata = {
  title: "Résumé — Neha Khare",
  alternates: { canonical: "/resume" },
};

export default function Resume() {
  return <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />;
}
