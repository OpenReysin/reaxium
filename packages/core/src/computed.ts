import { type Atom, atom } from "./atom";

export function computed<T>(fn: () => T, deps: Atom<unknown>[]): Atom<T> {
  const derived = atom(fn());

  deps.forEach((dep) => {
    dep.subscribe(() => {
      derived.set(fn());
    });
  });

  return derived;
}
