---
title: Examples
description: Real-world examples of using the library.
sidebar:
  order: 2
---

## Persisting State with Local Storage
Save and restore atom values using the browser's local storage.

```js
import { atom } from '@reaxium/core';
import { LocalStorageSystem } from '@reaxium/core';

const counter = atom(0, LocalStorageSystem('counter'));
counter.set(1);
// Value is automatically saved to localStorage
```

---

## Derived State with Computed
Create a computed value that depends on multiple atoms.

```js
import { atom, computed } from '@reaxium/core';

const width = atom(10);
const height = atom(20);
const area = computed(
  () => width.get() * height.get(),
  [width, height]
);

console.log(area.get()); // 200
width.set(5);
console.log(area.get()); // 100
```

---

## Subscribing to Changes
React to state changes with subscriptions.

```js
import { atom } from '@reaxium/core';

const user = atom({ name: 'Alice' });
const unsubscribe = user.subscribe((value) => {
  console.log('User changed:', value);
});
user.set({ name: 'Bob' });
// Logs: "User changed: { name: 'Bob' }"
unsubscribe(); // Stop listening
```