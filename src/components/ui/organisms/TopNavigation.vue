<script setup>
import {ref} from "vue";
import {
  Logo,
  NavItems,
  UserMenu,
  BurgerMenuButton,
} from "@/components/ui";

const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
  userItems: {
    type: Array,
    required: true,
  },
});


const emit = defineEmits(["navigation:action"]);

const isMenuOpen = ref(false);

</script>


<template>
  <header class="topbar">
    <div class="left">
      <Logo />
    </div>

    <nav class="nav-items-container desktop-only">
      <NavItems
        :items="navItems"
      />
    </nav>

    <div class="actions">
      <UserMenu
        :items="userItems"
      />
    </div>

    <div class="right mobile-only">
      <BurgerMenuButton
      @click="emit('navigation:action', {
        action: 'toggleMobileNavigation',
      })"
      />
    </div>

  </header>
</template>


<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface);
}

.left {
  margin-left: var(--space-lg);
}

.nav-items-container {
  margin-left: var(--space-lg);
}

.actions {
  display: flex;
  gap: var(--space-md);
  margin-left: auto;
}
</style>
