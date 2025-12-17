import { createRouter, createWebHistory } from 'vue-router';
import {authRoutes} from "@/modules/auth";
import { useAuthStore } from "@/stores/useAuthStore.js";

const routes = [
  ...authRoutes,
  { path: '/', redirect: '/login' },
  { path: '/:pathMatch(.*)*', redirect: '/login' }, // NotFound
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Optional: Route Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.meta.requiresAuth || false;

  if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'auth.login' });
  }
  else {
    next();
  }
});

export default router;
