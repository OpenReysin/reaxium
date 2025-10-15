import { describe, expect, it, vi } from "vitest";
import { batch, enqueue } from "../src/batch";

describe("batch", () => {
  it("should run the callback immediately", () => {
    const fn = vi.fn();
    batch(fn);
    expect(fn).toHaveBeenCalledOnce();
  });

  it("should group multiple enqueue calls into one flush", () => {
    const fn1 = vi.fn();
    const fn2 = vi.fn();

    batch(() => {
      enqueue(fn1);
      enqueue(fn2);
      // Neither should run yet
      expect(fn1).not.toHaveBeenCalled();
      expect(fn2).not.toHaveBeenCalled();
    });

    // After batch, both should have run
    expect(fn1).toHaveBeenCalledOnce();
    expect(fn2).toHaveBeenCalledOnce();
  });

  it("should flush queued tasks only after the batch ends", () => {
    const order: string[] = [];

    batch(() => {
      enqueue(() => order.push("a"));
      enqueue(() => order.push("b"));
      order.push("inside");
    });

    order.push("after");

    expect(order).toEqual(["inside", "a", "b", "after"]);
  });

  it("should handle nested batches correctly", () => {
    const order: string[] = [];

    batch(() => {
      order.push("start");

      batch(() => {
        enqueue(() => order.push("inner"));
      });

      enqueue(() => order.push("outer"));
      order.push("end");
    });

    expect(order).toEqual(["start", "end", "inner", "outer"]);
  });

  it("should not interfere with non-batched enqueue calls", () => {
    const spy = vi.fn();

    enqueue(spy);
    expect(spy).toHaveBeenCalledOnce();
  });
});
