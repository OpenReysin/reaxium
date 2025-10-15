import type { Listener } from "../atom";
import { createStorage } from "./storageFactory";
import type { StorageSystem } from "./storageSystem";

export function memoryStorage<T>(initial: T): StorageSystem<T> {
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

export const MemoryStorageSystem = createStorage(memoryStorage);
