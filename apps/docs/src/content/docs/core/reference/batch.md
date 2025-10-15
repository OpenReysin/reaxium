---
title: batch
description: Batches multiple state updates into a single notification.
---

## Signature
```ts
import { batch } from '@reaxium/core';

function batch(fn: () => void): void
```

## Parameters
| Name  | Type          | Description                     |
|-------|---------------|---------------------------------|
| `fn`  | `() => void`  | Function to execute in batch.  |

## Example
```ts
const a = atom(0);
const b = atom(0);
batch(() => {
  a.set(1);
  b.set(1);
});
```