type Listener<T> = (value: T) => void;

export interface Atom<T> {
  get(): T;
  set(value: T): void;
  subscribe(listener: Listener<T>): () => void;
}

export function atom<T>(initial: T): Atom<T> {
  let value = initial;
  const listeners = new Set<Listener<T>>();

  const get = () => value;

  const set = (newValue: T) => {
    if (Object.is(newValue, value)) return;
    value = newValue;
    for (const listener of listeners) listener(value);
  };

  const subscribe = (listener: Listener<T>) => {
    listeners.add(listener);
    listener(value);
    return () => listeners.delete(listener);
  };

  return { get, set, subscribe };
}
