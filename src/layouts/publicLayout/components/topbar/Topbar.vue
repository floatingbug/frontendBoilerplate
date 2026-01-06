<script setup>
import {Navigation, Logo, AuthButtons} from "./components";
import {useUserStore} from "@/stores/useUserStore.js";
import {useAuthStore} from "@/stores/useAuthStore.js";

const emit = defineEmits(["topbar:action"]);

function onAuthButtonsPress(event){
  switch(event.button){
    case "signIn" :
      emit("topbar:action", {action: "signIn"});
    break;
    case "signUp" :
      emit("topbar:action", {action: "signUp"});
    break;
  }
}

</script>


<template>
  <div class="topbar">
    <div class="topbar-left">
      <div class="navigation-container">
        <Navigation />
      </div>

      <div class="logo-container">
        <Logo />
      </div>
    </div>

    <div class="auth-buttons-container">
      <AuthButtons
        @authButtons:press="onAuthButtonsPress"
      />
    </div>
  </div>
</template>


<style scoped lang="scss">
@use "@/styles/breakpoints" as bp;
@use "@/styles/media" as media;

.topbar {
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-sm);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-surface-mid);
}

.topbar-left {
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.navigation-container {
  order: 1;
}

.logo-container {
  order: 2;
}

@include media.up(bp.$bp-md) {
  .navigation-container {
    order: 2;
    margin-left: var(--space-lg);
  }

  .logo-container {
    order: 1;
  }
}
</style>
