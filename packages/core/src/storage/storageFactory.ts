import { memoryStorage } from "./memoryStorageSystem";
import type { StorageSystem } from "./storageSystem";

export type StorageFactory<T> = (initial: T) => StorageSystem<T>;

export function createStorage<T>(
  factory: StorageFactory<T> = memoryStorage,
): (initial: T) => StorageSystem<T> {
  return (initial: T) => factory(initial);
}
