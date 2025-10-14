import { describe, it, expect, vi } from "vitest";
import { atom } from "../src";
import { computed } from "../src";

describe("computed", () => {
  it("should compute derived values", () => {
    const count = atom(1);
    const double = computed(() => count.get() * 2, [count]);

    expect(double.get()).toBe(2);
    count.set(3);
    expect(double.get()).toBe(6);
  });

  it("should notify when dependencies change", () => {
    const count = atom(2);
    const double = computed(() => count.get() * 2, [count]);
    const spy = vi.fn();
    double.subscribe(spy);
    count.set(4);
    expect(spy).toHaveBeenLastCalledWith(8);
  });
});
