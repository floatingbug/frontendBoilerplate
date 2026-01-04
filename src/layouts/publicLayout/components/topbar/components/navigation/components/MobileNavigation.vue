<script setup>
import { ref } from "vue";

const drawerVisible = ref(false);
const toggleDrawer = () => (drawerVisible.value = !drawerVisible.value);
</script>

<template>
  <div class="mobile-navigation">
    <button @click="toggleDrawer" class="hamburger-btn">☰</button>

    <Drawer v-model:visible="drawerVisible" position="left" :showHeader="false">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </Drawer>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as bp;
@use "@/styles/media" as media;

.hamburger-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-navigation {
  display: flex;
}

.mobile-navigation ul {
  list-style: none;
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-navigation a {
  text-decoration: none;
  color: inherit;
}
</style>
