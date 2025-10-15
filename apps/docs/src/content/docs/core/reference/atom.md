---
title: atom
description: Creates a reactive state container.
---

## Signature
```ts
import { atom } from '@reaxium/core';

function atom<T>(
  initial: T,
  storageFactory?: StorageFactory<T>
): Atom<T>
```

## Parameters
| Name            | Type                | Description                                                                 |
|-----------------|---------------------|-----------------------------------------------------------------------------|
| `initial`       | `T`                 | Initial value of the atom.                                                  |
| `storageFactory`| `StorageFactory<T>`  | (Optional) Storage system to persist the atom's value. Defaults to memory. |

## Returns
| Type      | Description                     |
|-----------|---------------------------------|
| `Atom<T>` | An atom instance.               |

## Example
```ts
const count = atom(0);
```