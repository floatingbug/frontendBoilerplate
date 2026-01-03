<script setup>
import { ToolButton } from "../atoms";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["tool:action"]);

function onToolButtonPress(event){
  emit('tool:action', {
    action: "toolSelected",
    toolAction: event.action,
  });
}

</script>

<template>
  <ul class="tools-items">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="tools-item"
      @click="onToolButtonPress"
    >
      <ToolButton
        :item="item"
        @press="onToolButtonPress"
      />

      <span class="label">
        {{ item.label }}
      </span>
    </li>
  </ul>
</template>

<style scoped>
.tools-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  gap: var(--space-tools-gap);

  list-style: none;
  padding: 0;
  margin: 0;

  overflow-x: hidden;
}

.tools-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: var(--space-tools-item-padding-vertical) var(--space-tools-item-padding-horizontal);
  border-radius: var(--radius-tools-item);

  cursor: pointer;
  user-select: none;

  transition:
    background-color 0.15s ease,
    transform 0.1s ease;
}

.tools-item:hover {
  background-color: var(--color-tools-item-hover);
  box-shadow: var(--shadow-tools-item-hover);
}

.tools-item:active {
  transform: scale(0.96);
}

.label {
  margin-top: var(--space-tools-label-margin-top);
  font-size: var(--font-size-tools-label);
  text-align: center;
  color: var(--color-tools-label);
}

@media (prefers-color-scheme: dark) {
  .label {
    color: var(--color-tools-label);
  }
}
</style>
