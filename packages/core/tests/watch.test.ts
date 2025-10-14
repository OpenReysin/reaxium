import { describe, it, expect, vi } from "vitest";
import { atom } from "../src";
import { watch } from "../src";

describe("watch", () => {
  it("should react to atom changes", () => {
    const name = atom("John");
    const spy = vi.fn();
    watch(name, spy);

    name.set("Alice");
    expect(spy).toHaveBeenLastCalledWith("Alice");
  });

  it("should return unsubscribe function", () => {
    const count = atom(0);
    const spy = vi.fn();
    const unsub = watch(count, spy);
    unsub();
    count.set(1);
    expect(spy).toHaveBeenCalledTimes(1); // initial call only
  });
});
