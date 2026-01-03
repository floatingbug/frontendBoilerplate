<script setup>
const emit = defineEmits(["click"]);
</script>


<template>
  <Button
    class="burger-button"
    icon="pi pi-bars"
    variant="text"
    severity="secondary"
    size="large"
    rounded
    @click="emit('click')"
  />
</template>


<style scoped>
.burger-button {
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
