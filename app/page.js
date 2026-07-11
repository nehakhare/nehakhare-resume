import { resumeHtml } from "./resumeHtml";

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />;
}
