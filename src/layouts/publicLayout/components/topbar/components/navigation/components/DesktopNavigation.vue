<script setup></script>

<template>
  <nav class="desktop-navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/features">Features</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as bp;
@use "@/styles/media" as media;

.desktop-navigation ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
}
</style>
