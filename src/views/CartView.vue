<template>
  <div>I am a cart page</div>
  <div v-for="item in cart.items" :key="item.id">
    <pre>{{ item }}</pre>
    <button type="button" @click="() => handleRemoveFromCart(item.id)">
      remove from cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

const handleRemoveFromCart = (itemId: string) => {
  cart.removeFromCart(itemId);
};
</script>

<style scoped></style>
