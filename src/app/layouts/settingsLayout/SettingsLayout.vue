<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/modules/auth/store'
import { Topbar, Logo, UserMenu, NavToggle, Sidebar, SidebarDrawer } from '@/shared/components'
import {getUserMenuItems} from "@/app/navigation/userMenu";
import {getSidebarItems} from "@/app/navigation/sidebar";

const router = useRouter()
const route = useRoute();
const authStore = useAuthStore()
const isSidebarDrawerVisible = ref(false)
const isDelitingAccountProcess = ref(false)
const userMenuItems = getUserMenuItems();
const sidebarItems = getSidebarItems();

function onSidebarDrawerAction(event) {}

async function onUserMenuActions(event) {
	switch (event.action) {
		case 'signOut':
			await authStore.signOut()
			authStore.clear();
			router.push('/auth/signin')
			break
	}
}
</script>

<template>
	<div class="settings-layout">
		<header>
			<Topbar>
				<template #topbarLeft>
					<div class="topbar__nav-toggle-btn mobile-only">
						<NavToggle
							@toggleNav:press="isSidebarDrawerVisible = !isSidebarDrawerVisible"
						/>
					</div>

					<Logo @logo:press="router.push('/dashboard')" />
				</template>

				<template #topbarRight>
					<UserMenu
						@action="onUserMenuActions"
						:items="userMenuItems"
					/>
				</template>
			</Topbar>
		</header>

		<aside>
			<Sidebar class="desktop-only"
				:items="sidebarItems"
			/>
		</aside>

		<SidebarDrawer
			class="mobile-only"
			:items="sidebarItems"
			:visible="isSidebarDrawerVisible"
			@action="onSidebarDrawerAction"
		/>

		<main>
			<div class="main-content">
				<RouterView />
			</div>
		</main>
	</div>
</template>

<style scoped lang="scss">
.settings-layout {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas:
		'header header'
		'aside main';
}

header {
	grid-area: header;
	width: 100%;
	height: var(--topbar-height);
	z-index: 500;
}

aside {
	grid-area: aside;
	z-index: 100;
}

main {
	width: 100%;
	grid-area: main;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: var(--space-md);
}

.main-content {
	width: 100%;
	max-width: 1024px;
}
</style>
