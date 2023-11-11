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

  function addItemOrIncreaseCount(newItemId: string) {
    const itemToAdd = getItemByID.value(newItemId);
    if (itemToAdd) {
      itemToAdd.count++;
    } else {
      items.value.push({ id: newItemId, count: 1 });
    }
  }

  function decreaseItemCount(itemId: string) {
    const itemToRemove = getItemByID.value(itemId);
    if (itemToRemove) {
      itemToRemove.count > 0 && itemToRemove.count--;
    }
  }

  function removeItem(itemId: string) {
    const itemToRemove = getItemByID.value(itemId);
    if (itemToRemove) {
      const index = items.value.findIndex(
        (item) => itemToRemove.id === item.id
      );
      if (index >= 0) {
        // is this okay? Modifying the original array? I think so.
        // at least in Vue land
        items.value.splice(index, 1);
      }
    }
  }

  return {
    items,
    getItemByID,
    getTotalCount,
    addItemOrIncreaseCount,
    decreaseItemCount,
    removeItem,
  };
});
