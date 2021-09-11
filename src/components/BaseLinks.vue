<template>
	<div class="links">
		<div v-for="(icon, index) in icons" :key="index" class="link_wrapper">
			<font-awesome-icon :icon="icon" />
		</div>
	</div>
</template>
<script>
export default {
	props: {
		icons: {
			type: Array,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.links {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background: white;

	.link_wrapper {
		width: 48px;
		height: 48px;
		border-bottom: 1px solid rgba(25, 68, 132, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;
		svg {
			display: block;
			color: #0d6eb7;
			text-decoration: none;
			font-size: 24px;
			line-height: 24px;
		}
	}
}
</style>
