---
title: computed
description: Creates a derived, reactive value from other atoms.
---

## Signature
```ts
import { computed, Atom } from '@reaxium/core';

function computed<T>(
  fn: () => T,
  deps: Atom<unknown>[]
): Atom<T>
```

## Parameters
| Name  | Type          | Description                     |
|-------|---------------|---------------------------------|
| `fn`  | `() => T`     | Function to compute the value. |
| `deps`| `Atom<unknown>[]` | Atoms to watch for changes.   |

## Returns
| Type      | Description                     |
|-----------|---------------------------------|
| `Atom<T>` | A computed atom instance.       |

## Example
```ts
const firstName = atom('John');
const lastName = atom('Doe');
const fullName = computed(
  () => `${firstName.get()} ${lastName.get()}`,
  [firstName, lastName]
);
```