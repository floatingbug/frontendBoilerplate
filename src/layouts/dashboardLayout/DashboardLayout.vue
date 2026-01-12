<script setup>
import {ref, computed} from "vue";
import {useRouter, useRoute} from "vue-router";
import {Topbar, UserMenu, Sidebar, Logo, NavToggle} from "@/components";
import {userItems} from "./config/userMenu.config.js";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {DashboardSiedebarDrawer} from "./components";
import {dashboardItems,  settingsItems} from "./config/dashboard.config.js";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
const isSidebarDrawerVisible = ref(false);

const sidebarItems = computed(() => {
  return route.path.startsWith("/dashboard/settings")
    ? settingsItems
    : dashboardItems;
});

async function onUserMenuAction(event){
  switch(event.action){
    case "openSettings" :

    break;
    case "signOut" :
      await authStore.signOut();
      router.push("/auth/signin");
    break;
  }
}

async function onDashboardSidebarAction(event){
  switch(event.action){
    case "close" : isSidebarDrawerVisible.value = false;
    break;
  }
}

</script>


<template>
  <div class="dashboard-layout">
    <header grid-area="top">
      <Topbar>
        <template #topbarLeft>
          <logo
          />

          <div class="topbar__nav-toggle-btn">
            <NavToggle
              @toggleNav:press="isSidebarDrawerVisible = !isSidebarDrawerVisible"
            />
          </div>

          <DashboardSiedebarDrawer
            :items="sidebarItems"
            :visible="isSidebarDrawerVisible"
            @DashboardSidebarDrawer:action="onDashboardSidebarAction"
          />
        </template>

        <template #topbarRight>
          <UserMenu
            :items="userItems"
            @userMenu:action="onUserMenuAction"
          />
        </template>
      </Topbar>
    </header>

    <aside grid-area="aside">
      <Sidebar
        :items="sidebarItems"
      />
    </aside>

    <main grid-area="main">
      <RouterView />
    </main>
  </div>
</template>


<style lang="scss" scoped>
@use "@/styles/breakpoints" as bp;
@use "@/styles/media" as media;

.dashboard-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-area:
    "top top"
    "aside main";
}

header {
  width: 100%;
  height: var(--topbar-height);
  position: fixed;
  z-index: 500;
}

aside {
  height: 100%;
  position: fixed;
  top: var(--topbar-height);
  display: none;
  z-index: 100;

  @include media.up(bp.$bp-md) {
    display: flex;
  }
}

.topbar__nav-toggle-btn {
  display: flex;

  @include media.up(bp.$bp-md) {
    display: none;
  }
}
</style>
