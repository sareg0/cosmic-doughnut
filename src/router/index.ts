import { createRouter, createWebHistory } from "vue-router";
import ProductListingView from "../views/ProductListingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product listing",
      component: ProductListingView,
    },
    {
      path: "/cart",
      name: "cart",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CartView.vue"),
    },
  ],
});

export default router;
