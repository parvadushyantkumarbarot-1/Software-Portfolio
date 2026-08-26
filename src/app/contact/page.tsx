import type { Metadata } from "next";
import { Mail, MapPin, Link as LinkIcon } from "lucide-react";
import { site } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/copy-email-button";
import { ContactForm } from "@/components/contact/contact-form";
import { GithubIcon } from "@/components/icons/github-icon";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.email}, GitHub, and location.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
        Contact
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Let&apos;s talk about what you&apos;re building
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
        The fastest way to reach me is email. Everything below is a direct,
        no-backend contact option.
      </p>

      <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="rounded-lg border border-border bg-surface p-5">
            <ul className="flex flex-col gap-4">
              <li className="flex min-w-0 items-center justify-between gap-3">
                <span className="inline-flex min-w-0 items-center gap-2.5 text-sm text-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-accent-secondary" aria-hidden="true" />
                  <span className="truncate" title={site.email}>
                    {site.email}
                  </span>
                </span>
                <CopyEmailButton className="shrink-0" email={site.email} />
              </li>
              <li className="flex min-w-0 items-center justify-between gap-3">
                <span className="inline-flex shrink-0 items-center gap-2.5 text-sm text-foreground">
                  <GithubIcon className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                  GitHub
                </span>
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={site.githubUrl}
                  className="min-w-0 truncate text-sm font-medium text-accent-secondary hover:underline"
                >
                  {site.githubUrl.replace("https://", "")}
                </a>
              </li>
              <li className="flex min-w-0 items-center justify-between gap-3">
                <span className="inline-flex shrink-0 items-center gap-2.5 text-sm text-foreground">
                  <LinkIcon className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                  Portfolio
                </span>
                <a
                  href={site.canonicalUrl}
                  title={site.canonicalUrl}
                  className="min-w-0 truncate text-sm font-medium text-accent-secondary hover:underline"
                >
                  {site.canonicalUrl.replace("https://", "")}
                </a>
              </li>
              <li className="flex min-w-0 items-center justify-between gap-3">
                <span className="inline-flex shrink-0 items-center gap-2.5 text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                  Location
                </span>
                <span className="truncate text-sm text-muted-foreground">
                  {site.location}
                </span>
              </li>
            </ul>
          </div>

          <a
            href={`mailto:${site.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me Directly
          </a>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-surface p-5 sm:p-6">
          <h2 className="font-serif text-lg font-semibold text-foreground">
            Draft a message
          </h2>
          <div className="mt-4">
            <ContactForm email={site.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
