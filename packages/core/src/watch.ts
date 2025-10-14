import { Atom } from "./atom";

export function watch<T>(store: Atom<T>, fn: (value: T) => void) {
  return store.subscribe(fn);
}
