<template>
	<div class="not-found">
		<the-navigation light />
		<div class="page404 mlr-120 plrm-30">
			<div class="text-block">
				<h1 class="h1">it looks like you are lost</h1>
				<base-button class="base-button" @click.native="toHomePage"
					>Return to homepage</base-button
				>
			</div>
		</div>
		<the-advertisement-section />
		<the-contacts-section />
		<footer-section />
	</div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation"
import TheAdvertisementSection from "@/components/TheAdvertisementSection"
import FooterSection from "@/components/FooterSection.vue"
import TheContactsSection from "@/components/TheContactsSection.vue"
import routeNames from "@/router/routeNames"
export default {
	components: {
		TheNavigation,
		TheAdvertisementSection,
		FooterSection,
		TheContactsSection,
	},
	methods: {
		toHomePage() {
			this.$router.push({ name: routeNames.index })
		},
	},
}
</script>
<style lang="scss" scoped>
.not-found {
	.page404 {
		height: 775px;
		background: url("~@/assets/404.png") no-repeat;
		box-sizing: border-box;
		background-size: calc(max(100% - 60px));
		background-position: center;
		.text-block {
			padding-top: 620px;
			display: flex;
			flex-direction: column;
			align-items: center;
			.h1 {
				font-family: "Harabara";
				font-style: normal;
				font-weight: bold;
				font-size: 44px;
				line-height: 60px;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				text-align: center;
				color: #194484;
			}
			.base-button::v-deep {
				border-radius: 6px;
				background: #06b25f;
			}
		}
	}
	@media screen and (max-width: 496px) {
		.page404 {
			height: 220px;
			.text-block {
				padding-top: 150px;
				.h1 {
					font-size: 18px;
					line-height: 24px;
				}
			}
		}
	}
}
</style>
