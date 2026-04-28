<script setup>
import { ref } from 'vue';
import Toolbar from 'primevue/toolbar';


</script>


<template>
	<Toolbar
		:pt="{
			root: {
				style: {
					border: 'none',
				},
			},
		}"
	>
		<template #start>
			<slot name="start" />
		</template>

		<template #center>
			<slot name="center" />
		</template>

		<template #end>
			<slot name="end" />
		</template>
	</Toolbar>
</template>


<style scoped lang="scss">
.toolbar-end {
	display: flex;
	gap: var(--space-md);
}
</style>
