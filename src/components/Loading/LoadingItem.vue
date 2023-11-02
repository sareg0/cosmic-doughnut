<template>
  <div :style="{ height, width }" class="loading"></div>
</template>

<script setup lang="ts">
defineProps<{ height: string; width: string }>();
</script>

<style scoped>
.loading {
  /* border: 2px solid azure; */
  background-color: palevioletred;
}
</style>
