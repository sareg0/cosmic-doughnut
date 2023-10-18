import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { captureRejectionSymbol } from "events";

type CartItem = {
  id: string;
  count: number;
};

type CartType = CartItem[];

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartType>([]);
  const getItemByID = computed(
    () => (id: string) => items.value.find((i: CartItem) => i.id === id)
  );
  function addToCart(newItemId: string) {
    if (items.value.length > 0) {
      const itemToAdd = getItemByID.value(newItemId);
      // const itemToAdd = items.value.find((i) => i.id === newItemId);
      if (itemToAdd) {
        itemToAdd.count++;
      }
    } else {
      items.value.push({ id: newItemId, count: 1 });
    }
  }

  return { items, getItemByID, addToCart };
});
