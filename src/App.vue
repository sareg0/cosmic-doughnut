<script setup lang="ts">
import { RouterView } from "vue-router";
import Logo from "@/components/MainLogo/MainLogo.vue";
import { ref, watch } from "vue";
type OrderType = "pickup" | "delivery";
import { useCartStore } from "@/stores/cart";
const orderType = ref<OrderType | undefined>();

const handleOrderType = (value: OrderType) => {
  orderType.value = value;
};

const store = useCartStore();

watch(orderType, (newValue, oldValue) => {
  console.log("old orderType:", oldValue);
  console.log("new orderType:", newValue);
});
</script>

<template>
  <header>
    <div style="width: 200px; height: 200px"><Logo /></div>
  </header>

  <main class="wrapper">
    <h2>cart: {{ store.getTotalCount }}</h2>
    <button @click="handleOrderType('pickup')">Pick-up</button>
    <button @click="handleOrderType('delivery')">Delivery</button>
    <section id="order-details">
      <div v-if="orderType === 'pickup'">you want to pickup!</div>
      <div v-if="orderType === 'delivery'">you are getting a delivery!</div>
    </section>
    <!-- <nav>
        <RouterLink to="/delivery">DELIVERY</RouterLink>
        <RouterLink to="/pickup">PICKUP</RouterLink>
      </nav> -->
  </main>

  <RouterView />
</template>

<style scoped></style>
