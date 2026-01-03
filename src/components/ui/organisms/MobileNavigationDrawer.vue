<script setup>
import {NavItems} from "../molecules";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["navigation:action"]);

</script>

<template>
  <Drawer
    :visible="visible"
    header="Menu"
    position="left"
    modal
    dismissable
    blockScroll
    class="mobile-navigation-drawer"
    @update:visible="emit('navigation:action', {
      action: 'closeMobileNavigation'
    })"
  >
    <NavItems
      :items="items"
      @close="emit('navigation:action', {
        action: 'closeMobileNavigation'
      })"
    />
  </Drawer>
</template>

<style scoped>
</style>
