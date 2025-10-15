# 🧠 Reaxium

![NPM Last Update](https://img.shields.io/npm/last-update/%40reaxium%2Fcore)
![NPM Downloads](https://img.shields.io/npm/dw/%40reaxium%2Fcore)
![NPM Type Definitions](https://img.shields.io/npm/types/%40reaxium%2Fcore)
![GitHub contributors](https://img.shields.io/github/contributors/OpenReysin/reaxium)
![GitHub License](https://img.shields.io/github/license/OpenReysin/reaxium)


---

> Reaxium is a **framework-agnostic reactive state management system**.  
> Tiny and composable.

---

<img src="https://github.com/OpenReysin/.github/raw/main/logo.png" alt="" width="30" height="30" />  Made at <b><a href="https://reysin.fr">Reysin</a></b>, <b>software creation</b>, <b>consulting</b>, and <b>digitalisation</b>.

---

- Framework-agnostic reactive state primitives
- Core features:
  - `atom(initialValue)` — create reactive state
  - `computed(fn, deps)` — derive reactive values
  - `watch(store, callback)` — react to changes
  - `batch(fn)` / `enqueue(fn)` — group updates
- Usage:

```ts
import { atom, computed, watch, batch } from "@reaxium/core";

const count = atom(0);
const doubled = computed(() => count.get() * 2, [count]);

watch(doubled, value => console.log("Doubled:", value));

batch(() => {
  count.set(1);
  count.set(2);
});
````

---

---

## ⚡ License

MIT © OpenReysin
