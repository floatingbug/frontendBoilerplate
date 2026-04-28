<script setup>
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";
import getSidebarItems from "./getSidebarItems.js";

const route = useRoute();
const router = useRouter();

const items = computed(() => {
	return getSidebarItems({
		context: route.matched[0]?.meta?.context ?? "default",
	});
});

</script>

<template>
	<nav class="sidebar-nav">
		<ul class="sidebar-list">
			<li
				v-for="item in items"
				:key="item.id"
				class="sidebar-list-item"
			>
				<RouterLink
					class="sidebar-link"
					:to="item.to"
				>
					{{ item.label }}
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
.sidebar-nav {
	height: 100%;
	padding: var(--space-md);
}

.sidebar-list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}

.sidebar-list-item {
	margin: 0;
	padding: 0;
}

.sidebar-link {
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 2.75rem;
	padding: 0.75rem 1rem;
	border-radius: 0.75rem;
	color: var(--sidebar-text);
	text-decoration: none;
	transition:
		background-color 0.2s ease,
		color 0.2s ease,
		outline-color 0.2s ease;
}

.sidebar-link:hover {
	background-color: var(--sidebar-hover);
}

.sidebar-link:focus-visible {
	outline: 2px solid var(--sidebar-focus-ring);
	outline-offset: 2px;
}
</style>
