<script setup>
import {ref} from "vue";
import {UserMenuButton, UserMenuItemButton} from "../atoms";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  }
});

const emit = defineEmits(["click"]);

const menu = ref();

const toggle = (event) => {
    menu.value.toggle(event);
};

const listStyle = ref({
  padding: "var(--space-lg)",
  display: "flex",
  "flex-direction": "column",
  gap: "var(--space-md)",
});
</script>


<template>
  <UserMenuButton
    @click="toggle"
  />
  <Menu
    ref="menu"
    id="overlay_menu"
    :model="items"
    :popup="true"
    :pt="{
      list: {
        style: listStyle
      }
    }"
  >
    <template #item="{item}">
      <UserMenuItemButton
        :item="item"
      />
    </template>
  </Menu>
</template>


<style scoped>
</style>
