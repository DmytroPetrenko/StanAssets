<template>
	<div class="menu" :class="{ light }">
		<div class="logo">
			<img :src="require(`@/assets/${logo}`)" />
		</div>
		<base-navigation :light="light" :tabs="all" />
		<base-button
			:color="light ? '#06B25F' : null"
			:border="light ? '2px solid #06B25F' : null"
			>Contact us</base-button
		>
	</div>
</template>
<script>
import { mapState } from "vuex"
export default {
	props: {
		light: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState("pages", ["all"]),
		logo() {
			return this.light ? "logo_black.png" : "logo.png"
		},
	},
}
</script>
<style lang="scss" scoped>
.light {
	background: white !important;
	box-shadow: none !important;
}
.menu {
	height: 80px;
	padding: 0 120px;
	background: rgba(33, 33, 33, 0.3);
	box-shadow: 0px 4px 12px rgba(24, 9, 96, 0.1);
	display: flex;
	align-items: center;
}
</style>
