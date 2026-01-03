<script setup>
const emit = defineEmits(["click"]);
</script>


<template>
  <Button
    class="burger-button"
    icon="pi pi-user"
    variant="text"
    severity="secondary"
    size="large"
    rounded
    @click="emit('click', $event)"
  />
</template>


<style scoped>
.burger-button {
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
