import type { Listener } from "../atom";

export interface StorageSystem<T> {
  get(): T;
  set(value: T): void;
  subscribe(listener: Listener<T>): () => void;
}
