<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["press"]);

</script>

<template>
  <Button
    :icon="icon"
    variant="text"
    severity="contrast"
    v-tooltip="label"
    @click="emit('press')"
  />
</template>

<style scoped lang="scss">
</style>
