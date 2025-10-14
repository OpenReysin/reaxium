import { ref, onUnmounted, Ref, UnwrapRef } from "vue";
import { Atom } from "@reaxium/core";

type VueRef<T> = Ref<T> | Ref<UnwrapRef<T>>;

export function useStore<T>(store: Atom<T>): VueRef<T> {
  const state = ref(store.get());
  const unsub = store.subscribe(v => (state.value = v));
  onUnmounted(unsub);
  return state;
}
