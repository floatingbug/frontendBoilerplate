<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
});

const emit = defineEmits(['action'])

const menu = ref()

function toggle(event) {
	menu.value.toggle(event)
}

const mappedItems = computed(() => {
	return props.items.map(item => ({
		...item,
		command: () => {
			emit("action", {action: item.action});
		},
	}));
});

</script>

<template>
	<Button icon="pi pi-user" severity="secondary" variant="text" @click="toggle" />

	<Menu
		ref="menu"
		:model="mappedItems"
		:popup="true"
	/>
</template>

<style scoped>
.item {
	width: 100%;
}
</style>
