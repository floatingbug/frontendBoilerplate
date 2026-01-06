<script setup>
const emit = defineEmits(["authButtons:press"]);

function onAuthButtonPress(button){
  emit("authButtons:press", {button});
}

</script>


<template>
  <div class="auth-buttons">
    <Button
      label="Sign in"
      severity="secondary"
      @click="onAuthButtonPress('signIn')"
      :pt="{
        root: {
          style: 'box-shadow: var(--shadow-sm)'
        }
      }"
    />

    <Button
      label="Sign up"
      @click="onAuthButtonPress('signUp')"
      :pt="{
        root: {
          style: 'box-shadow: var(--shadow-sm)'
        }
      }"
    />
  </div>
</template>


<style scoped>
.auth-buttons {
  display: flex;
  gap: var(--space-md);
}
</style>
