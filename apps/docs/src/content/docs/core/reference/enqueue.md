---
title: enqueue
description: Enqueues a function to run after the current batch.
---

## Signature
```ts
import { enqueue } from '@reaxium/core';

function enqueue(fn: () => void): void
```

## Parameters
| Name  | Type          | Description                     |
|-------|---------------|---------------------------------|
| `fn`  | `() => void`  | Function to enqueue.           |
