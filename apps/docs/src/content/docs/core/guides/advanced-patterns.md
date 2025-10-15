---
title: Advanced Patterns
description: Advanced usage patterns and optimizations.
sidebar:
    order: 3
---

# Advanced Patterns

## Custom Storage Systems
Create your own storage system for atoms.

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

---

## Optimizing Performance with Batching
Use `batch` to minimize unnecessary re-renders or computations.

```js
import { atom, batch } from '@reaxium/core';

const a = atom(0);
const b = atom(0);

batch(() => {
  a.set(1);
  b.set(2);
});
// Listeners are notified only once
```

---

## Debugging State Changes
Log state changes for debugging purposes.

```js
import { atom } from '@reaxium/core';

const debugAtom = atom(0);
debugAtom.subscribe((value) => {
  console.debug('State changed:', value);
});
```