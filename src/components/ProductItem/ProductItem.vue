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
    <button type="button" @click="() => handleAddToStore(id)">
      add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
export type Props = {
  id: string;
  name: string;
  image: string;
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
