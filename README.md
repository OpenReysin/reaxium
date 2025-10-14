# 🧠 Reaxium Monorepo

> Reaxium is a **framework-agnostic reactive state management system**.  
> Tiny and composable.

This monorepo contains multiple packages:

```

reaxium/
├── packages/
│   ├── core/       # Core reactive state engine (atoms, computed, watch, batch)
│   ├── vue/        # Vue adapter
│   └── react/      # React adapter
├── package.json    # Monorepo root (workspace)
└── tsconfig.json   # Shared TypeScript config

````

---

## 📦 Packages

### 1. `@reaxium/core`

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

### 2. `@reaxium/vue`

* Vue 3 adapter using `ref` and `onUnmounted`
* Usage:

```ts
import { atom } from "@reaxium/core";
import { useStore } from "@reaxium/vue";

const count = atom(0);
const countRef = useStore(count);
```

---

### 3. `@reaxium/react`

* React adapter using `useSyncExternalStore`
* Usage:

```ts
import { atom } from "@reaxium/core";
import { useStore } from "@reaxium/react";

const count = atom(0);
function Counter() {
  const value = useStore(count);
  return <button onClick={() => count.set(value + 1)}>Count: {value}</button>;
}
```

---

## 🛠️ Monorepo Commands

From the root directory (assuming **npm workspaces**):

```bash
# Install dependencies for all packages
npm install

# Build all packages
npm run build --workspaces

# Run tests for all packages
npm test --workspaces

# Run dev watch for a single package
cd packages/core
npm run dev
```

---

## 🧩 Testing

Each package uses **Vitest**. Example:

```bash
cd packages/core
npm run test
```

---

## 📦 Publishing

Each package is versioned independently.
Ensure `dist` is built and then publish:

```bash
cd packages/core
npm run build
npm publish
```

---

## 🔮 Roadmap

* [ ] Async atoms / derived stores
* [ ] Middleware support (logging, persistence)
* [ ] DevTools for reactive debugging
* [ ] Adapters for Svelte / Solid
* [ ] More batching optimizations

---

## ⚡ License

MIT © OpenReysin
