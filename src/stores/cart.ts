import { ref, computed } from "vue";
import { defineStore } from "pinia";

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

  const getTotalCount = computed(() => {
    return items.value.reduce((prev, current) => prev + current.count, 0);
  });

  function addToCart(newItemId: string) {
    const itemToAdd = getItemByID.value(newItemId);
    if (itemToAdd) {
      itemToAdd.count++;
    } else {
      items.value.push({ id: newItemId, count: 1 });
    }
  }

  return { items, getItemByID, getTotalCount, addToCart };
});
