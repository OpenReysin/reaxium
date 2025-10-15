# 🧠 Reaxium

![NPM Version](https://img.shields.io/npm/v/%40reaxium%2Fcore)
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


* Vue 3 adapter using `ref` and `onUnmounted`
* Usage:

```ts
import { atom } from "@reaxium/core";
import { useStore } from "@reaxium/vue";

const count = atom(0);
const countRef = useStore(count);
```

---

## ⚡ License

MIT © OpenReysin
