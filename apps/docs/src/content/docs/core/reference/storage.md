---
title: Storage 
description: Storage system interfaces and factory types.
---

## `StorageSystem<T>`

Interface for storage systems.

### Properties
| Name        | Type                     | Description                     |
|-------------|--------------------------|---------------------------------|
| `get`       | `() => T`                | Get the current value.         |
| `set`       | `(value: T) => void`     | Set a new value.               |
| `subscribe` | `(listener: Listener<T>) => () => void` | Subscribe to value changes. |

---

## `StorageFactory<T>`

Factory function for creating storage systems.

### Signature
```ts
type StorageFactory<T> = (initial: T) => StorageSystem<T>
```

---

## `createStorage`

Creates a storage system from a factory.

### Signature
```ts
import { createStorage, StorageFactory } from '@reaxium/core';

function createStorage<T>(
  factory?: StorageFactory<T>
): (initial: T) => StorageSystem<T>
```

### Parameters
| Name     | Type                | Description                     |
|----------|---------------------|---------------------------------|
| `factory`| `StorageFactory<T>`  | (Optional) Storage factory.     |

### Example
```ts
const storage = createStorage()(0);
```