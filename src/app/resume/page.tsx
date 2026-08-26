import type { Metadata } from "next";
import { FileWarning, Mail } from "lucide-react";
import { site } from "@/data/portfolio";
import { resumeFileExists } from "@/lib/resume";
import { ResumeActions } from "@/components/resume/resume-actions";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Preview or download ${site.name}'s résumé.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const available = resumeFileExists();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
        Résumé
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {site.name}
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
        {site.title}
      </p>

      <div className="mt-8">
        {available ? (
          <ResumeActions
            resumePath={site.resumePath}
            fileName={site.resumeFileName}
          />
        ) : (
          <div className="flex flex-col gap-3 rounded-lg border border-dashed border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-foreground">
              <FileWarning className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <p className="text-sm font-medium">Résumé file not configured</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A résumé PDF hasn&apos;t been added to this deployment yet. Once
              added at{" "}
              <code className="rounded bg-surface-raised px-1.5 py-0.5 font-mono text-xs">
                public{site.resumePath}
              </code>
              , preview and download will be enabled automatically — no
              content on this page is fabricated in the meantime.
            </p>
            <a
              href={`mailto:${site.email}?subject=Résumé request`}
              className="inline-flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-raised"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Request résumé by email
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
