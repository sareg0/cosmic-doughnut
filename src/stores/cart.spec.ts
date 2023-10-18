import { setActivePinia, createPinia } from "pinia";
import { useCartStore } from "./cart";
import { describe, beforeEach, it, expect } from "vitest";

describe("Cart Store", () => {
  // does the afterEach in my vitest.setup.ts take care of this?
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });
  it("adds a given product to the cart", () => {
    const cart = useCartStore();
    expect(cart.items.length).toBe(0);
    cart.addToCart("1234-5678");
    expect(cart.items.length).toBe(1);
    cart.addToCart("1234-5678");
  });
  it("incremenets an item that is already in the cart", () => {
    const cart = useCartStore();
    expect(cart.items.length).toBe(0);
    const uuid = "1234-5678";
    cart.addToCart(uuid);
    cart.addToCart(uuid);
    expect(cart.items.length).toBe(1);
    expect(cart.getItemByID(uuid)).toMatchObject({ count: 2 });
  });
});
