<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["close"]);

</script>

<template>
  <ul class="nav-items">
    <li
      v-for="item in items"
      :key="item.path"
      class="nav-item"
      @click="emit('close')"
    >
      <RouterLink
        :to="item.path"
        class="nav-link"
      >
        <i
          class="icon"
          :class="item.icon"
        />

        <span class="label">
          {{ item.label }}
        </span>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/styles/media";
@use "@/styles/breakpoints";

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: var(--color-text, #222);
  transition: background-color 0.15s ease;
}

@include media.up(breakpoints.$bp-lg) {
  .nav-items {
    flex-direction: row;
  }
}
</style>
