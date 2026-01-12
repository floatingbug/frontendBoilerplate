<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

</script>


<template>
  <Menu
    :model="items"
  />
</template>


<style scoped lang="scss">
</style>
