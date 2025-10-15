import type { Atom } from "@reaxium/core";
import { useSyncExternalStore } from "react";

export function useStore<T>(store: Atom<T>): T {
  return useSyncExternalStore(store.subscribe, store.get);
}
