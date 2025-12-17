<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore.js";
import { signup } from "../api/auth.api.js";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

async function submit() {
  try {
    const response = await register({ email: email.value, password: password.value });
    authStore.setUser(response.data.user);
    authStore.setToken(response.data.token);
  } catch (err) {
    console.error("Registration failed", err);
  }
}
</script>

<template>
  <div class="register">
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="submit">Register</button>
  </div>
</template>
