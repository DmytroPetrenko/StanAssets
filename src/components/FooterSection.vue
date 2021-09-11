<template>
	<div id="footer">
		<div class="footer-information-group">
			<div class="footer-logos">
				<img :src="require('@/assets/footer_logo.png')" class="logo" />

				<div class="social-icons">
					<font-awesome-icon
						v-for="(icon, index) in icons"
						:key="index"
						:icon="icon"
					/>
				</div>
			</div>
			<footer-section-navigation-default-list
				:tabs="servicesTabs"
				headerText="Services"
			/>
			<footer-section-navigation-default-list
				:tabs="technologiesTabs"
				headerText="Technologies"
			/>
			<div class="products-list">
				<footer-section-navigation-default-list-header
					v-for="tab in productTabs"
					:key="tab"
					class="pb-16"
				>
					{{ tab }}
				</footer-section-navigation-default-list-header>
			</div>
			<footer-section-navigation-default-list
				:tabs="aboutUsTabs"
				headerText="About us"
			/>
		</div>
		<div class="footer-copyright-group">
			<div class="footer-copyright">
				© {{ year }} Stan`s Assets. All right reserved
			</div>
			<div class="footer-policies">
				<div class="privacy">Privacy policy</div>
				<div class="cookies">Cookies policy</div>
			</div>
		</div>
	</div>
</template>
<script>
import FooterSectionNavigationDefaultList from "@/components/FooterSectionNavigationDefaultList"
import FooterSectionNavigationDefaultListHeader from "@/components/FooterSectionNavigationDefaultListHeader"

export default {
	components: {
		FooterSectionNavigationDefaultList,
		FooterSectionNavigationDefaultListHeader,
	},
	data() {
		return {
			servicesTabs: [
				"Mobile Application Development",
				"Game Development Outsourcing",
				"VR App Development",
				"Dedicated Developers",
				"SDK Development",
				"3D Modeling services",
			],
			technologiesTabs: ["Android", "IOS", "Unity"],
			productTabs: ["Products", "Portfolio", "Blog"],
			aboutUsTabs: ["Contacts", "Team", "Join the Team"],
			icons: [
				["fab", "facebook"],
				["fab", "linkedin"],
				["fab", "whatsapp"],
				["fab", "skype"],
				["fab", "github"],
			],
		}
	},
	computed: {
		year() {
			return new Date().getFullYear()
		},
	},
}
</script>
<style lang="scss" scoped>
.fa-facebook {
	color: #66d6a0;
}
#footer {
	background: url(~@/assets/footer_bg1.png), url(~@/assets/footer_bg2.png);
	background-size: auto 100%;
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	.footer-information-group {
		padding: 0 120px;
		padding-bottom: 32px;
		display: flex;
		justify-content: space-between;
		.footer-logos {
			.logo {
				padding: 0 22px;
			}
			.social-icons {
				max-width: 260px;
				color: white;
				font-size: 40px;
				display: flex;
				flex-wrap: wrap;
				svg {
					padding: 22px;
				}
			}
		}
	}
	.footer-copyright-group {
		height: 60px;
		background: white;
		padding: 0 120px;
		display: flex;
		align-items: center;
		font-family: "Open Sans";
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 19px;
		color: #4c4c4c;
		.footer-copyright {
			flex: 1 1 0;
		}
		.footer-policies {
			flex: 1 1 0;
			display: flex;
			justify-content: space-around;
		}
	}
}
</style>
