---
title: watch
description: Watches an atom for changes and calls a function when the value changes.
---


## Signature
```ts
import { watch, Atom } from '@reaxium/core';

function watch<T>(
  store: Atom<T>,
  fn: (value: T) => void
): () => void
```

## Parameters
| Name   | Type          | Description                     |
|--------|---------------|---------------------------------|
| `store`| `Atom<T>`     | Atom to watch.                 |
| `fn`   | `(value: T) => void` | Callback on value change. |

## Returns
| Type          | Description                     |
|---------------|---------------------------------|
| `() => void`  | Function to unsubscribe.        |

## Example
```ts
const count = atom(0);
const unsubscribe = watch(count, (val) => console.log(val));
```