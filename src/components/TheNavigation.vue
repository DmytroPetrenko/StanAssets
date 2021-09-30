<template>
	<div class="menu menu-mobile" :class="{ light }">
		<div class="desktop">
			<div class="logo" @click="toHomePage">
				<img :src="require(`@/assets/${logo}`)" />
			</div>
			<base-navigation :light="light" :tabs="all" />
			<base-button
				:color="light ? '#06B25F' : null"
				:border="light ? '2px solid #06B25F' : null"
				>Contact us</base-button
			>
		</div>
		<div class="mobile">
			<div class="logo" @click="toHomePage">
				<img :src="require(`@/assets/${logo}`)" />
			</div>
			<font-awesome-icon
				:icon="['fas', 'bars']"
				:class="{ lightTheme: light }"
				class="icon"
				@click="changeMobileBarStatus"
			/>
		</div>
		<div :class="{ displayBlock: isMobileBarOpen }" class="mobile-bar">
			<p class="close" @click="changeMobileBarStatus">close</p>
			<base-navigation :tabs="all" @pageChanged="changeMobileBarStatus" />
			<base-button
				color="#06B25F"
				border="2px solid #06B25F"
				class="mobile-button"
				>Contact us</base-button
			>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex"
import routeNames from "@/router/routeNames"
export default {
	props: {
		light: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			isMobileBarOpen: false,
		}
	},
	computed: {
		...mapState("pages", ["all"]),
		logo() {
			return this.light ? "logo_black.png" : "logo.png"
		},
	},
	methods: {
		changeMobileBarStatus() {
			this.isMobileBarOpen = !this.isMobileBarOpen
		},
		toHomePage() {
			this.$router.push({ name: routeNames.index })
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
	display: flex;
	box-shadow: 0px 4px 12px rgba(24, 9, 96, 0.1);
	.desktop {
		display: flex;
		flex: 1;
		justify-content: space-between;
		align-items: center;
		.logo {
			cursor: pointer;
		}
	}
	.mobile {
		display: none;
	}
	.mobile-bar {
		display: none;
	}

	@media screen and (max-width: 496px) {
		.desktop {
			display: none;
		}
		.mobile {
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: space-between;
			.icon {
				font-size: 20px;
				color: white;
			}
			.lightTheme {
				color: #194484;
			}
		}
		.mobile-bar {
			display: none;
			position: fixed;
			width: 85%;
			height: 100%;
			left: 0;
			z-index: 5;
			background-color: white;
			box-shadow: 20px 10px 30px rgba(0, 0, 0, 0.5);
			padding: 5px;
			box-sizing: border-box;
			.mobile-button::v-deep {
				width: 200px;
				border-radius: 6px;
				font-size: 14px;
				margin: 10px;
				border: 2px solid rgb(6, 178, 95) !important;
			}
			.close {
				text-align: right;
				padding-right: 30px;
				color: rgb(6, 178, 95);
			}
		}
	}
}
.displayBlock {
	display: block !important;
}
.menu-mobile {
	padding: 0 60px;
}
</style>
