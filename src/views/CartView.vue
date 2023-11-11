<template>
  <div>I am a cart page</div>
  <div v-for="item in cart.items" :key="item.id">
    <pre>{{ item }}</pre>
    <button type="button" @click="() => handleIncrease(item.id)">
      increase
    </button>
    <button type="button" @click="() => handleDecrease(item.id)">
      decrease
    </button>
    <button type="button" @click="() => handleRemove(item.id)">remove</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

const handleRemove = (itemId: string) => {
  cart.removeItem(itemId);
};
const handleDecrease = (itemId: string) => {
  cart.decreaseItemCount(itemId);
};
const handleIncrease = (itemId: string) => {
  cart.addItemOrIncreaseCount(itemId);
};
</script>

<style scoped></style>
