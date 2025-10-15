import type { Atom } from "@reaxium/core";
import { onUnmounted, type Ref, ref, type UnwrapRef } from "vue";

type VueRef<T> = Ref<T> | Ref<UnwrapRef<T>>;

export function useStore<T>(store: Atom<T>): VueRef<T> {
  const state = ref(store.get());
  const unsub = store.subscribe((v) => {
    state.value = v;
  });
  onUnmounted(unsub);
  return state;
}
