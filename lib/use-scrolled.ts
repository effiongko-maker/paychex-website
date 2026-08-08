"use client";

import { useCallback, useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  let frame = 0;

  const onScroll = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      onStoreChange();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    if (frame) window.cancelAnimationFrame(frame);
  };
}

/**
 * Boolean scroll threshold — re-renders only when crossing the line.
 */
export function useScrolled(threshold = 50) {
  const getSnapshot = useCallback(
    () => window.scrollY > threshold,
    [threshold],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
