<script setup lang="ts">
import { RouterView } from "vue-router";
import Logo from "@/components/MainLogo/MainLogo.vue";
import { useCartStore } from "@/stores/cart";

const store = useCartStore();
</script>

<template>
  <header>
    <div style="width: 200px; height: 200px"><Logo /></div>
  </header>

  <main class="wrapper">
    this section should be on every page
    <h2>cart: {{ store.getTotalCount }}</h2>

    <!-- <nav>
        <RouterLink to="/delivery">DELIVERY</RouterLink>
        <RouterLink to="/pickup">PICKUP</RouterLink>
      </nav> -->
  </main>

  <RouterView />
</template>

<style scoped></style>
