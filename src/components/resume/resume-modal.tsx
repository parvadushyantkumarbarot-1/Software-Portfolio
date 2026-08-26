"use client";

import { useEffect, useRef } from "react";
import { X, Download, ExternalLink } from "lucide-react";

export function ResumeModal({
  open,
  onClose,
  resumePath,
  fileName,
}: {
  open: boolean;
  onClose: () => void;
  resumePath: string;
  fileName: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Dismiss résumé preview"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Résumé preview"
        className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p className="text-sm font-medium text-foreground">{fileName}</p>
          <div className="flex items-center gap-2">
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-foreground hover:bg-surface-raised"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Open
            </a>
            <a
              href={resumePath}
              download
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-foreground hover:bg-surface-raised"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close résumé preview"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border hover:bg-surface-raised"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex-1 bg-background">
          <object
            data={resumePath}
            type="application/pdf"
            className="hidden h-full w-full sm:block"
            aria-label="Résumé PDF preview"
          >
            <p className="p-6 text-sm text-muted-foreground">
              PDF preview isn&apos;t available in this browser. Use Open or
              Download above.
            </p>
          </object>
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center sm:hidden">
            <p className="text-sm text-muted-foreground">
              Inline PDF preview isn&apos;t supported on this device. Open the
              résumé in a new tab instead.
            </p>
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Open Résumé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
