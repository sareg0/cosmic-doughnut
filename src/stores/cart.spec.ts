import { setActivePinia, createPinia } from "pinia";
import { useCartStore } from "./cart";
import { describe, beforeEach, it, expect } from "vitest";

const uuid_one = "94ddf238-421a-4a51-a8c9-341280d9f0de";
const uuid_two = "d2171b60-7cff-41fb-9fca-5c5125f38055";

describe("Cart Store", () => {
  // does the afterEach in my vitest.setup.ts take care of this?
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });
  describe("Getters", () => {
    describe("getItemByID", () => {
      it("returns a given item", () => {
        const cart = useCartStore();
        expect(cart.getItemByID(uuid_one)).toBeUndefined();
        expect(cart.getItemByID(uuid_two)).toBeUndefined();
        cart.addItemOrIncreaseCount(uuid_one);
        expect(cart.getItemByID(uuid_one)).toMatchObject({
          id: uuid_one,
          count: 1,
        });
        expect(cart.getItemByID(uuid_two)).toBeUndefined();
      });
    });
    describe("getTotalCount", () => {
      it("returns the total count of the items in the cart", () => {
        const cart = useCartStore();
        cart.addItemOrIncreaseCount(uuid_one);
        cart.addItemOrIncreaseCount(uuid_one);
        cart.addItemOrIncreaseCount(uuid_two);
        expect(cart.items.length).toBe(2);
        expect(cart.getTotalCount).toBe(3);
      });
    });
  });
  describe("Actions", () => {
    // change these to describes
    it("adds a given product to the cart", () => {
      const cart = useCartStore();
      expect(cart.items.length).toBe(0);
      cart.addItemOrIncreaseCount("1234-5678");
      expect(cart.items.length).toBe(1);
      cart.addItemOrIncreaseCount("1234-5678");
    });
    it("increments an item that is already in the cart", () => {
      const cart = useCartStore();
      expect(cart.items.length).toBe(0);
      const uuid = "1234-5678";
      cart.addItemOrIncreaseCount(uuid);
      cart.addItemOrIncreaseCount(uuid);
      expect(cart.items.length).toBe(1);
      expect(cart.getItemByID(uuid)).toMatchObject({ count: 2 });
    });
    it("remove an item that is in the cart", () => {
      const cart = useCartStore();
      expect(cart.items.length).toBe(0);
      const uuid = "1234-5678";
      cart.addItemOrIncreaseCount(uuid);
      cart.addItemOrIncreaseCount(uuid);
      expect(cart.items.length).toBe(1);
      expect(cart.getItemByID(uuid)).toMatchObject({ count: 2 });
      cart.decreaseItemCount(uuid);
      expect(cart.getItemByID(uuid)).toMatchObject({ count: 1 });
      cart.decreaseItemCount(uuid);
      expect(cart.getItemByID(uuid)).toMatchObject({ count: 0 });
      cart.decreaseItemCount(uuid);
      expect(cart.getItemByID(uuid)).toMatchObject({ count: 0 });
    });
    it("deletes an item that is in the cart", () => {
      const cart = useCartStore();
      expect(cart.items.length).toBe(0);
      const uuidOne = "226e4172-8d35-4075-bbea-9e730d618d21";
      const uuidTwo = "a9aef20f-1893-4613-af15-d62fa677a5bb";

      cart.addItemOrIncreaseCount(uuidOne);
      cart.addItemOrIncreaseCount(uuidOne);
      cart.addItemOrIncreaseCount(uuidTwo);

      expect(cart.items.length).toBe(2);
      expect(cart.getItemByID(uuidOne)).toMatchObject({ count: 2 });
      expect(cart.getItemByID(uuidTwo)).toMatchObject({ count: 1 });

      cart.removeItem(uuidTwo);
      expect(cart.getItemByID(uuidTwo)).toBeUndefined();
      expect(cart.items.length).toBe(1);

      cart.removeItem(uuidOne);
      expect(cart.items.length).toBe(0);
      expect(cart.getItemByID(uuidOne)).toBeUndefined();
    });
  });
});
