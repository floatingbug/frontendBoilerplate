import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(user) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
    setToken(token) {
      this.token = token;
    },
    clear() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
    },
  },
});

