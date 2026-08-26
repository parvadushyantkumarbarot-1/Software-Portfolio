import "@testing-library/jest-dom/vitest";

// jsdom does not implement matchMedia. Provide a default stub (no reduced
// motion, no dark-scheme preference) so components that read it — the
// theme provider, framer-motion's useReducedMotion — don't throw. Tests
// that need a specific media-query result override this per test.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}
