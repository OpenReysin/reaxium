---
title: Atom<T>
description: Reactive state container interface
---

## Properties
| Name        | Type                     | Description                     |
|-------------|--------------------------|---------------------------------|
| `get`       | `() => T`                | Get the current value.         |
| `set`       | `(value: T) => void`     | Set a new value.               |
| `subscribe` | `(listener: Listener<T>) => () => void` | Subscribe to value changes. |

## Example
```ts
const count = atom(0);
count.set(1);
console.log(count.get()); // 1
const unsubscribe = count.subscribe((val) => console.log(val));
```