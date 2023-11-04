<template>
  <RouterLink to="/cart">edit cart</RouterLink>
  <div class="listing-grid">
    <ProductItemList
      @add-to-cart="(e) => handleAddToCart(e.id)"
      :items="products.data"
      :loading="isLoading"
      :error="hasError"
    />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { ref, onMounted, computed } from "vue";
import ProductItemList from "@/components/ProductItemList/ProductItemList.vue";
import { type Props as ProductItemType } from "@/components/ProductItem/ProductItem.vue";

const store = useCartStore();

const handleAddToCart = (id: string) => {
  store.addToCart(id);
};

const products = ref<{
  loading: boolean;
  data: ProductItemType[] | undefined;
  error: boolean;
}>({
  loading: false,
  data: undefined,
  error: false,
});

const isLoading = computed(() => !!products.value.loading);
const hasError = computed(() => !!products.value.error);

// ToDo: improve data fetching
// How do I test a component like this?
// I could test that the timer is run down for this fake version, but what would happen when it is no longer
// implemented like this?

onMounted(() => {
  products.value.loading = true;
  setTimeout(() => {
    products.value.data = [
      {
        id: "510e1188-b092-437a-aff1-050b35bc57e7",
        name: "Cosmic Y",
        image: {
          src: "cosmicy-1.png",
        },
        description: "A description of Cosmic Y",
      },
      {
        id: "32367aff-485e-48f9-813e-a69914041e70",
        name: "Cosmic Y",
        image: {
          src: "cosmicy-1.png",
        },
        description: "A description of Cosmic Y",
      },
      {
        id: "46f7c2cf-32a7-4902-a66e-7037be700651",
        name: "Cosmic Y",
        image: {
          src: "cosmicy-1.png",
        },
        description: "A description of Cosmic Y",
      },
      {
        id: "f753169d-3f07-4570-9593-db0bb4ec30a9",
        name: "Cosmic Y",
        image: {
          src: "cosmicy-1.png",
        },
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
