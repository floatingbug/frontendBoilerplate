<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["click"]);

</script>


<template>
  <Button
    class="item-button"
    :icon="item.icon"
    :label="item.label"
    variant="text"
    severity="secondary"
    size="large"
    @click="emit('click')"
  />
</template>


<style scoped>
.item-button {
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
