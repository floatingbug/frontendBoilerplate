<script setup>
const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <nav class="desktop-navigation">
    <ul>
      <li
        v-for="item in navItems"
        :key="item.id"
      >
        <RouterLink
          :to="item.to"
        >
          {{item.label}}
        </RouterLink>
      </li>
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
  gap: var(--space-lg);
}

.desktop-navigation a {
  text-decoration: none;
  color: var(--color-text);
}
</style>
