<script setup>
const emit = defineEmits(["topbar:action"]);

</script>


<template>
  <div class="topbar">
    <div class="topbar-left">
      <slot name="topbarLeft" />
    </div>

    <div class="topbar-right">
      <slot name="topbarRight" />
    </div>
  </div>
</template>


<style scoped>
.topbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-sm);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-topbar);
  z-index: 500;
}

.topbar-left {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
