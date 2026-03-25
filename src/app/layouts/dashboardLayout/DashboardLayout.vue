<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
	Topbar,
	UserMenu,
	Sidebar,
	Logo,
	NavToggle,
	BreadcrumbPath,
	SidebarDrawer,
} from '@/shared/components'
import { useAuthStore } from '@/modules/auth/store'
import {getUserMenuItems} from "@/app/navigation/userMenu";
import {getSidebarItems} from "@/app/navigation/sidebar";
import {useViewport} from "@/shared/composables";

const viewport = useViewport();
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute();
const isSidebarDrawerVisible = ref(false)
const userMenuItems = getUserMenuItems();
const sidebarItems = getSidebarItems({page: "dashboard"});


async function onUserMenuAction(event) {
	switch (event.action) {
		case 'openSettings':
			router.push('/settings/profile')
		break

		case 'signOut':
			await authStore.signOut()
			authStore.clear();
			router.push('/auth/signin')
		break
	}
}

async function onSidebarDrawerAction(event) {
	switch (event.action) {
		case 'close':
			isSidebarDrawerVisible.value = false
			break
	}
}
</script>

<template>
	<div class="dashboard-layout">
		<header>
			<Topbar>
				<template #topbarLeft>
					<div class="mobile-only">
						<NavToggle
							@toggleNav:press="isSidebarDrawerVisible = !isSidebarDrawerVisible"
						/>
					</div>

					<Logo />
				</template>

				<template #topbarRight>
					<UserMenu
						:items="userMenuItems"
						@action="onUserMenuAction"
					/>
				</template>
			</Topbar>
		</header>

		<aside class="desktop-only">
			<Sidebar :items="sidebarItems" />
		</aside>

		<SidebarDrawer
			class="mobile-only"
			:items="sidebarItems"
			:visible="isSidebarDrawerVisible"
			@sidebarDrawer:action="onSidebarDrawerAction"
		/>

		<main>
			<RouterView />
		</main>
	</div>
</template>

<style lang="scss" scoped>
@use '@/shared/styles/breakpoints' as bp;
@use '@/shared/styles/media' as media;

.dashboard-layout {
	height: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas:
		'top top'
		'aside main';
}

header {
	grid-area: top;
	height: var(--topbar-height);
	z-index: 500;
}

aside {
	grid-area: aside;
	z-index: 100;
}

main {
	grid-area: main;
}
</style>
