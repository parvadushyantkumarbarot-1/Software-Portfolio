"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const body = [name && `From: ${name}`, "", message]
      .filter((line) => line !== "")
      .join("\n");
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="rounded-md border border-border bg-surface-raised px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        This form drafts an email in your default mail client — it does not
        send a message from this site, and there is no backend behind it.
      </p>

      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-foreground"
        >
          Name (optional)
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-foreground"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Portfolio inquiry"
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:opacity-90"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Compose Email
      </button>
    </form>
  );
}
