---
title: FAQ
description: Frequently asked questions and answers.
sidebar:
  order: 5
---

## Why use this library?
The library provides a lightweight, reactive state management solution with minimal boilerplate. It’s ideal for small to medium-sized applications or as a building block for larger architectures.

---

## How do I persist state?
Use the `LocalStorageSystem` or create a custom storage system.

```js
import { atom, LocalStorageSystem } from '@reaxium/core';

const persistedAtom = atom('default', LocalStorageSystem('myKey'));
```

---

## Can I use this with other frameworks?
Yes! The library is framework-agnostic and can be used with any JavaScript environment.

---

## How do I reset an atom to its initial value?
Store the initial value and reset it when needed.

```js
import { atom } from '@reaxium/core';

const initialValue = 0;
const counter = atom(initialValue);
const reset = () => counter.set(initialValue);
```