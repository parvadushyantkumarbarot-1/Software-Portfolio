import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/data/portfolio";

// Server-only. Checks whether the résumé PDF has actually been placed in
// /public at the centrally configured path, so the UI can show an honest
// "not configured" state instead of a broken download link.
export function resumeFileExists(): boolean {
  const filePath = path.join(process.cwd(), "public", site.resumePath);
  return existsSync(filePath);
}
