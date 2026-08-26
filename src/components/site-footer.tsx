import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/data/portfolio";
import { navItems } from "@/components/nav/nav-items";
import { GithubIcon } from "@/components/icons/github-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-raised font-serif text-sm font-semibold"
              >
                {site.initials}
              </span>
              <span className="font-serif text-base font-semibold">
                {site.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.positioning}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Navigate
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </h2>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js and
            Tailwind CSS.
          </p>
          <p className="font-mono">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
