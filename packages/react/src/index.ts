import { useEffect, useSyncExternalStore } from "react";
import type { Atom } from "@reaxium/core";

export function useStore<T>(store: Atom<T>): T {
  return useSyncExternalStore(store.subscribe, store.get);
}
