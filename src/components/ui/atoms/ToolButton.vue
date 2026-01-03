<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["press"]);

</script>


<template>
  <Button
    class="tool-button"
    :icon="item.icon"
    variant="text"
    severity="secondary"
    size="large"
    rounded
    @click="emit('press', item)"
  />
</template>


<style scoped>
.tool-button {
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
