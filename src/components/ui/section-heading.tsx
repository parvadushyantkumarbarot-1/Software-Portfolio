import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
          {eyebrow}
        </p>
      )}
      <Heading className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
