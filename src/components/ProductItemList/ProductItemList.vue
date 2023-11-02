<template>
  <div class="listing-grid">
    <template v-if="loading">
      <ProductItemSkeleton v-for="item in [...Array(10).keys()]" :key="item">
        <template #image>
          <LoadingItem height="200px" width="200px" />
        </template>
        <template #name>
          <LoadingItem height="20px" width="63%" />
        </template>
        <template #description>
          <LoadingItem height="20px" width="100%" />
          <LoadingItem height="20px" width="33%" />
        </template>
      </ProductItemSkeleton>
    </template>
    <h3 v-else-if="error">error while loading products...</h3>
    <ProductItem
      v-else
      @add="(e) => handleAdd(e.id)"
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :image="item.image"
      :description="item.description"
    >
      <template #image="{ image }">
        <img
          :src="`src/assets/product-images/${image.src}`"
          alt=""
          height="200"
          width="200"
        />
      </template>
    </ProductItem>
  </div>
</template>

<script setup lang="ts">
import ProductItem, {
  type Props as ProductItemType,
} from "@/components/ProductItem/ProductItem.vue";
import LoadingItem from "@/components/Loading/LoadingItem.vue";
import ProductItemSkeleton from "@/components/ProductItemSkeleton/ProductItemSkeleton.vue";

type Props = {
  loading?: boolean;
  error?: boolean;
  items?: ProductItemType[];
};

defineProps<Props>();

const emit = defineEmits<{
  "add-to-cart": [{ id: string }];
}>();

const handleAdd = (id: string) => {
  emit("add-to-cart", { id });
};
</script>

<style scoped></style>
