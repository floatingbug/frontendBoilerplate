<script setup>
import {ToolRailButton} from "../atoms";

const props = defineProps({
  tools: {
    type: Array,
    required: true,
  },
  activeTool: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["tool:action"]);

function onToolClick(tool) {
  emit("tool:action", {
    action: "toolSelected",
    toolAction: tool.action,
  });
}
</script>

<template>
  <aside class="tool-rail">
    <ToolRailButton
      v-for="tool in tools"
      :key="tool.action"
      :icon="tool.icon"
      :label="tool.label"
      @click="onToolClick(tool)"
    />
  </aside>
</template>

<style scoped lang="scss">
.tool-rail {
  width: 56px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) 0;
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
}
</style>
