<script setup>
const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
})
</script>

<template>
	<Menu
		:model="items"
		:pt="{
			root: {
				style: {
					height: '100%',
					'border-radius': 0,
				}
			},
		}"
	/>
</template>

<style scoped lang="scss">
</style>
