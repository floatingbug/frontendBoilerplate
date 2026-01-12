<script setup>
import {ref} from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["userMenu:action"]);

const menu = ref();

function toggle(event){
  menu.value.toggle(event);
}

function onItemClick(action){
  emit("userMenu:action", {action});
}

</script>


<template>
  <Button
    icon="pi pi-user"
    severity="secondary"
    variant="text"
    @click="toggle"
  />

  <Menu
    ref="menu"
    :model="items"
    :popup="true"
  >
    <template #item="{item}">
      <Button
        :icon="item.icon"
        :label="item.label"
        :severity="item.severity"
        :variant="item.variant"
        @click="onItemClick(item.action)"
      />
    </template>
  </Menu>
</template>


<style scoped>
</style>
