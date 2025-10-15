import type { Listener } from "../atom";
import { createStorage, type StorageFactory } from "./storageFactory";
import type { StorageSystem } from "./storageSystem";

function localStorageFactory<T>(key: string): StorageFactory<T> {
  return (initial: T): StorageSystem<T> => {
    const stored = localStorage.getItem(key);
    let value: T = stored ? JSON.parse(stored) : initial;
    const listeners = new Set<Listener<T>>();

    const get = () => value;
    const set = (newValue: T) => {
      if (Object.is(newValue, value)) return;
      value = newValue;
      localStorage.setItem(key, JSON.stringify(value));
      for (const listener of listeners) listener(value);
    };
    const subscribe = (listener: Listener<T>) => {
      listeners.add(listener);
      listener(value);
      return () => listeners.delete(listener);
    };

    return { get, set, subscribe };
  };
}

export const LocalStorageSystem = createStorage(localStorageFactory("test"));
