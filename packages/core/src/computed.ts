import { atom, type Atom } from "./atom";

export function computed<T>(fn: () => T, deps: Atom<any>[]): Atom<T> {
  const derived = atom(fn());

  deps.forEach(dep => {
    dep.subscribe(() => {
      derived.set(fn());
    });
  });

  return derived;
}
