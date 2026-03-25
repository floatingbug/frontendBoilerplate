<script setup>
import Drawer from 'primevue/drawer'
import Menu from "primevue/menu";

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
	visible: {
		type: Boolean,
		required: true,
	},
})

const emit = defineEmits(['sidebarDrawer:action'])

function onUpdateVisible() {
	emit('sidebarDrawer:action', { action: 'close' })
}
</script>

<template>
	<Drawer :visible="visible" position="left" @update:visible="onUpdateVisible">
		<Menu
			:model="items"
			:pt="{
				root: {
					style: {
						height: '100%',
						border: 'none',
					}
				},
			}"
		/>
	</Drawer>
</template>

<style scoped lang="scss"></style>
