import { MemoryStorageSystem } from "./storage/memoryStorageSystem";
import type { StorageFactory } from "./storage/storageFactory";

export type Listener<T> = (value: T) => void;

export interface Atom<T> {
  get(): T;
  set(value: T): void;
  subscribe(listener: Listener<T>): () => void;
}

export function atom<T>(
  initial: T,
  storageFactory: StorageFactory<T> = MemoryStorageSystem,
): Atom<T> {
  const storage = storageFactory(initial);

  const get = () => storage.get();
  const set = (newValue: T) => storage.set(newValue);
  const subscribe = (listener: Listener<T>) => storage.subscribe(listener);

  return { get, set, subscribe };
}
