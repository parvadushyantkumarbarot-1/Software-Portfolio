"use client";

import { useState } from "react";
import { Eye, Download } from "lucide-react";
import { ResumeModal } from "./resume-modal";

export function ResumeActions({
  resumePath,
  fileName,
}: {
  resumePath: string;
  fileName: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:opacity-90"
        >
          <Eye className="h-4 w-4" aria-hidden="true" />
          Preview Résumé
        </button>
        <a
          href={resumePath}
          download
          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-raised"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download PDF
        </a>
      </div>
      <ResumeModal
        open={open}
        onClose={() => setOpen(false)}
        resumePath={resumePath}
        fileName={fileName}
      />
    </>
  );
}
