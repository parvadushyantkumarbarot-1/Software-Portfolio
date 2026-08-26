import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/copy-email-button";

export function ContactCta() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-lg border border-border bg-surface p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Building something that needs backend depth?
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Open to Software Engineer, Backend Engineer, Platform Engineer,
              Distributed Systems, Cloud Infrastructure, and AI Infrastructure
              roles.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Me
            </a>
            <CopyEmailButton email={site.email} />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-secondary hover:underline"
            >
              All contact options
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
