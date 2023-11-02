<template>
  <ProductItemSkeleton>
    <template #image>
      <slot name="image" :image="image" />
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
  };
  description: string;
};

defineSlots<{
  image(props: { image: Props["image"] }): any;
}>();
const emit = defineEmits<{
  add: [{ id: string }];
}>();
defineProps<Props>();

const handleAddToStore = (id: string) => {
  emit("add", { id });
};
</script>

<style scoped></style>
