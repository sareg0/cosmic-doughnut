<template>
  <div class="listing-grid">
    <ProductItem
      v-for="product in products"
      :id="product.id"
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
    id: "510e1188-b092-437a-aff1-050b35bc57e7",
    name: "Cosmic Y",
    description: "A description of Cosmic Y",
    image: "cosmicy-1.png",
  },
  {
    id: "32367aff-485e-48f9-813e-a69914041e70",
    name: "Cosmic Y",
    description: "A description of Cosmic Y",
    image: "cosmicy-1.png",
  },
  {
    id: "46f7c2cf-32a7-4902-a66e-7037be700651",
    name: "Cosmic Y",
    description: "A description of Cosmic Y",
    image: "cosmicy-1.png",
  },
  {
    id: "f753169d-3f07-4570-9593-db0bb4ec30a9",
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
