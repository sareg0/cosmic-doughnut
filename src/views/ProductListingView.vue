<template>
  <div class="listing-grid">
    <h3 v-if="products.loading">loading products...</h3>
    <h3 v-if="products.error">error while loading products...</h3>
    <ProductItem
      v-else
      @add="handleAddToCart"
      v-for="product in products.data"
      :id="product.id"
      :name="product.name"
      :image="product.image"
      :description="product.description"
    />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { ref, onMounted } from "vue";

import ProductItem, {
  type Props as ProductItemType,
} from "@/components/ProductItem/ProductItem.vue";

const store = useCartStore();

const handleAddToCart = (item: { id: string }) => {
  store.addToCart(item.id);
};

const products = ref<{
  loading: boolean;
  data: ProductItemType[] | undefined;
  error: boolean;
}>({
  loading: true,
  data: undefined,
  error: false,
});

// ToDo: improve data fetching
// How do I test a component like this?
// I could test that the timer is run down for this fake version, but what would happen when it is no longer
// implemented like this?

onMounted(() => {
  setTimeout(() => {
    products.value.data = [
      {
        id: "510e1188-b092-437a-aff1-050b35bc57e7",
        name: "Cosmic Y",
        image: "cosmicy-1.png",
        description: "A description of Cosmic Y",
      },
      {
        id: "32367aff-485e-48f9-813e-a69914041e70",
        name: "Cosmic Y",
        image: "cosmicy-1.png",
        description: "A description of Cosmic Y",
      },
      {
        id: "46f7c2cf-32a7-4902-a66e-7037be700651",
        name: "Cosmic Y",
        image: "cosmicy-1.png",
        description: "A description of Cosmic Y",
      },
      {
        id: "f753169d-3f07-4570-9593-db0bb4ec30a9",
        name: "Cosmic Y",
        image: "cosmicy-1.png",
        description: "A description of Cosmic Y",
      },
    ];
    products.value.loading = false;
  }, 2000);
});
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
