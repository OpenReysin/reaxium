import { describe, it, expect, vi } from "vitest";
import { atom } from "../src/atom";
describe("atom", () => {
    it("should get and set values", () => {
        const count = atom(0);
        expect(count.get()).toBe(0);
        count.set(5);
        expect(count.get()).toBe(5);
    });
    it("should notify subscribers", () => {
        const count = atom(0);
        const spy = vi.fn();
        count.subscribe(spy);
        count.set(1);
        expect(spy).toHaveBeenCalledWith(1);
    });
    it("should not notify if value is the same", () => {
        const store = atom(10);
        const spy = vi.fn();
        store.subscribe(spy);
        store.set(10);
        expect(spy).toHaveBeenCalledTimes(1); // initial call only
    });
});
