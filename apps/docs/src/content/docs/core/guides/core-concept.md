---
title: Core Concepts
description: Learn the foundational ideas behind atoms, computed values, and reactivity.
sidebar:
  order: 1
---

## Atoms
Atoms are the basic building blocks of state. They hold a value and allow subscription to changes.

```js
import { atom } from '@reaxium/core';

const count = atom(0);
console.log(count.get()); // 0
count.set(1);
console.log(count.get()); // 1
```

### Key Features:
- **Immutable Updates**: Atoms notify listeners only when the value changes.
- **Subscription Model**: Listen to changes with `subscribe`.

---

## Computed Values
Computed values are derived from one or more atoms and update automatically when dependencies change.

```js
import { atom, computed } from '@reaxium/core';

const firstName = atom('John');
const lastName = atom('Doe');
const fullName = computed(
  () => `${firstName.get()} ${lastName.get()}`,
  [firstName, lastName]
);

console.log(fullName.get()); // "John Doe"
firstName.set('Jane');
console.log(fullName.get()); // "Jane Doe"
```

### Key Features:
- **Automatic Updates**: No manual re-calculation needed.
- **Dependency Tracking**: Only re-computes when dependencies change.

---

## Batching Updates
Group multiple state updates into a single notification cycle for performance.

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