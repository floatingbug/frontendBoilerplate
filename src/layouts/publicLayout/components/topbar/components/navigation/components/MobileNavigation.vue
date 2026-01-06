<script setup>
import { ref } from "vue";
import {navItems} from "../navigation.config.js";

const drawerVisible = ref(false);
const toggleDrawer = () => (drawerVisible.value = !drawerVisible.value);
</script>

<template>
  <Button class="burger-toggle-btn"
    icon="pi pi-bars"
    severity="secondary"
    variant="text"
    @click="toggleDrawer"
  />

  <Drawer
    v-model:visible="drawerVisible"
    position="left"
    :showHeader="false"
    :pt="{
      root: {
        style: {
          'background-color': 'var(--color-surface-mid)'
        }
      }
    }"
  >
    <ul class="nav-link-list">
      <li
        v-for="item in navItems"
        :key="item.id"
      >
        <RouterLink :to="item.to">
          <div class="link-icon">
            <i v-if="item.icon" :class="item.icon" />
          </div>

          <div class="link-label">
            {{item.label}}
          </div>
        </RouterLink>
      </li>
    </ul>
  </Drawer>
</template>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as bp;
@use "@/styles/media" as media;

.burger-toggle-btn {
  box-shadow: var(--shadow-sm);
}

.nav-link-list {
  list-style: none;
  padding: var(--space-md);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.nav-link-list li {
  border-radius: var(--radius-md);
}

.nav-link-list a {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--space-lg) 0;
  text-decoration: none;
  color: var(--color-text);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-surface-top);
}

.link-icon {
  position: absolute;
  right: 50%;
  transform: translateX(-100%);
  margin-right: var(--space-sm);
}

.link-label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
