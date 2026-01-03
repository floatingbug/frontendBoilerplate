<script setup>
import {computed} from "vue";
import {ToolsList} from "../molecules";

const props = defineProps({
  visible: Boolean,
  toolsItems: Array
});

const emit = defineEmits(["tool:action"]);

const drawerStyle = computed(() => ({
  width: "100%",
  height: "auto",
  maxHeight: "80vh",
  borderTopLeftRadius: "var(--radius-lg)",
  borderTopRightRadius: "var(--radius-lg)",
  overflowY: "auto",
  padding: "var(--space-md)"
}));

function onToolAction(event){
  emit('tool:action', {
    ...event
  });
}

function onUpdateVisible(){
  emit('tool:action', {
    action: "toggleToolsSheet"
  });
}

</script>

<template>
  <Drawer
    :visible="visible"
    position="bottom"
    modal
    blockScroll
    class="mobile-tools-sheet"
    @update:visible="onUpdateVisible"
    :style="drawerStyle"
  >
    <ToolsList
      :items="toolsItems"
      @tool:action="onToolAction"
    />
  </Drawer>
</template>

<style scoped>
</style>
