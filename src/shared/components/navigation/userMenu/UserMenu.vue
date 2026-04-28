<script setup>
import {ref, computed} from 'vue'
import {useRoute, useRouter} from "vue-router";
import getUserMenuItems from "./getUserMenuItems.js";
import { useAuthStore } from '@/modules/auth/store'

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

// --- get UserMenu-Items ---
const items = computed(() =>
	getUserMenuItems({
		context: route.matched[0]?.meta?.context ?? 'default',
		router,
		authStore,
	})
);

// -- UserMenu ---
const menu = ref();

function toggle(event) {
  menu.value.toggle(event)
}
</script>

<template>
  <Button
    icon="pi pi-user"
    severity="secondary"
    variant="text"
    @click="toggle"
  />

  <Menu
    ref="menu"
    :model="items"
    popup
  />
</template>
