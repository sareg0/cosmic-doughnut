<template>
  <ProductItemSkeleton>
    <template #image>
      <img
        :src="`src/assets/product-images/${image.src}`"
        alt=""
        :height="image.height"
        :width="image.width"
      />
    </template>
    <template #name>
      <p>{{ name }}</p>
    </template>
    <template #description>
      <p>{{ description }}</p>
    </template>
    <template #actions>
      <button type="button" @click="() => handleAddToStore(id)">
        add to cart
      </button>
    </template>
  </ProductItemSkeleton>
</template>

<script setup lang="ts">
import ProductItemSkeleton from "@/components/ProductItemSkeleton/ProductItemSkeleton.vue";
export type Props = {
  id: string;
  name: string;
  image: {
    src: string;
    height: number;
    width: number;
  };
  description: string;
};

const emit = defineEmits<{
  add: [{ id: string }];
}>();
defineProps<Props>();

const handleAddToStore = (id: string) => {
  emit("add", { id });
};
</script>

<style scoped></style>
