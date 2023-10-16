<template>
  <div class="listing-grid">
    <ProductItem
      v-for="product in products"
      :name="product.name"
      :image="product.image"
      :description="product.description"
    />
  </div>
</template>

<script setup lang="ts">
import ProductItem from "@/components/ProductItem/ProductItem.vue";
const products = [
  {
    name: "Cosmic Y",
    description: "A description of Cosmic Y",
    image: "cosmicy-1.png",
  },
  {
    name: "Cosmic Y",
    description: "A description of Cosmic Y",
    image: "cosmicy-1.png",
  },
  {
    name: "Cosmic Y",
    description: "A description of Cosmic Y",
    image: "cosmicy-1.png",
  },
  {
    name: "Cosmic Y",
    description: "A description of Cosmic Y",
    image: "cosmicy-1.png",
  },
];
</script>

<style scoped>
.listing-grid {
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
}
</style>
