---
title: Storage Systems
description: Learn about built-in and custom storage systems.
sidebar:
  order: 4
---

## Built-in Storage Systems
The library includes two built-in storage systems:
- `MemoryStorageSystem`: Stores state in memory (default).
- `LocalStorageSystem`: Persists state in the browser's local storage.

```js
import { atom, LocalStorageSystem } from '@reaxium/core';

const persistedAtom = atom('default', LocalStorageSystem('myKey'));
```

---

## Creating a Custom Storage System
Implement your own storage system for unique requirements.

```js
import { createStorage } from '@reaxium/core';

const customStorage = createStorage((initial) => {
  let value = initial;
  const listeners = new Set();
  return {
    get: () => value,
    set: (newValue) => {
      value = newValue;
      listeners.forEach((listener) => listener(value));
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
});

const myAtom = atom('hello', customStorage);
```