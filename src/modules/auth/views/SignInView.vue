<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore.js";
import { signin } from "../api/auth.api.js";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

async function submit() {
  try {
    const response = await login({ email: email.value, password: password.value });
    authStore.setUser(response.data.user);
    authStore.setToken(response.data.token);
  } catch (err) {
    console.error("Login failed", err);
    // Optional: Toast or Error-State
  }
}
</script>

<template>
  <div class="login">
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="submit">Login</button>
  </div>
</template>

