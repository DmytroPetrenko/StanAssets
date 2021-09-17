<template>
	<div class="social">
		<div class="links">
			<div v-for="(icon, index) in icons" :key="index" class="link_wrapper">
				<font-awesome-icon :icon="icon" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			icons: [
				["fab", "facebook"],
				["fab", "linkedin"],
				["fab", "whatsapp"],
				["fab", "skype"],
			],
		}
	},
}
</script>
<style lang="scss" scoped>
.social {
	position: absolute;
	right: 0;
	align-self: center;
	padding: 0;

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
}
</style>
