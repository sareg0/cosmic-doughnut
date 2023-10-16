<template>
  <div>
    <img
      :src="`src/assets/product-images/${image}`"
      alt=""
      width="200"
      height="200"
    />
    <p>{{ name }}</p>
    <p>{{ description }}</p>
    <button>add to cart</button>
  </div>
</template>

<script setup lang="ts">
export type Props = {
  name: string;
  image: string;
  description: string;
};
defineProps<Props>();
</script>

<style scoped></style>
