import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

// Returns false during SSR and the initial client render, then true after
// hydration completes — the safe way to gate client-only UI (like a theme
// toggle) without a mismatched first paint.
export function useHasMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
