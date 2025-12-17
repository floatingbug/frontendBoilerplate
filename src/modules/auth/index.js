// Routes
export { default as authRoutes } from "./router";

// API
export * from "./api/auth.api.js";

// Store
export { useAuthModuleStore } from "./store/useAuthModuleStore.js";

// Views (optional, falls du Views extern importieren willst)
export { default as SignInView} from "./views/SignInView.vue";
export { default as SignUpView} from "./views/SignUpView.vue";
