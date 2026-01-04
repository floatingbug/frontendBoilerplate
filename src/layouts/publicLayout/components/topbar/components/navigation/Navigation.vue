<script setup>
import DesktopNavigation from "./components/DesktopNavigation.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
</script>

<template>
  <div class="navigation">
    <MobileNavigation />
    <DesktopNavigation />
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as bp;
@use "@/styles/media" as media;

.desktop-navigation {
  display: none;

  @include media.up(bp.$bp-md) {
    display: flex;
  }
}

.mobile-navigation {
  display: flex;

  @include media.up(bp.$bp-md) {
    display: none;
  }
}
</style>
