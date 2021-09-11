<template>
	<div class="menu">
		<div class="logo">
			<img :src="require('@/assets/logo.png')" />
		</div>
		<base-navigation :tabs="tabs" />
		<base-button>Contact us</base-button>
	</div>
</template>
<script>
export default {
	props: {
		tabs: {
			type: Array,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.menu {
	height: 80px;
	padding: 0 120px;
	background: rgba(33, 33, 33, 0.3);
	box-shadow: 0px 4px 12px rgba(24, 9, 96, 0.1);
	display: flex;
	align-items: center;
}
</style>
