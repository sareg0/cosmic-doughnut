<template>
  <div class="product">
    <slot name="image" />
    <slot name="name" />
    <slot name="description" />
    <slot name="actions">
      <button disabled="true" type="button" class="product__action">
        add to cart
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  image: any;
  name: any;
  description: any;
  actions: any;
}>();
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
