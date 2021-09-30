<template>
	<div class="row">
		<p class="name">{{ authorFullName }}</p>
		<div class="social-icons">
			<font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
			<font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
		</div>
	</div>
</template>
<script>
export default {
	props: {
		authorFullName: {
			type: String,
			default: "Full Name",
		},
	},
}
</script>
<style lang="scss" scoped>
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.name {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 26px;
		color: #242424;
		margin: 0;
	}
	.social-icons {
		color: #b1b1b1;
		.icon {
			font-size: 24px;
			padding: 0 6px;
		}
	}
}
</style>
