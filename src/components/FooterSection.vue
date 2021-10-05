<template>
	<div id="footer">
		<div class="footer-information-group">
			<div class="footer-logos">
				<img :src="require('@/assets/footer_logo.png')" class="logo" />

				<div class="social-icons">
					<font-awesome-icon
						v-for="icon in iconsWithIds"
						:key="icon.id"
						:icon="icon.icon"
						class="icon"
					/>
				</div>
			</div>
			<footer-section-navigation-default-list
				:tabs="servicesTabs"
				headerText="Services"
				class="background-color plr-5"
			/>
			<footer-section-navigation-default-list
				:tabs="technologiesTabs"
				headerText="Technologies"
				class="background-color plr-5"
			/>
			<div class="products-list background-color plr-5 plrm-30">
				<footer-section-navigation-default-list-header
					v-for="tab in productTabs"
					:key="tab.name"
					class="active-header pb-16"
					@click.native="changePage(tab)"
				>
					{{ tab.text }}
				</footer-section-navigation-default-list-header>
			</div>
			<footer-section-navigation-default-list
				:tabs="aboutUsTabs"
				headerText="About us"
				class="background-color plr-5"
			/>
		</div>
		<div class="footer-copyright-group">
			<div class="footer-copyright">
				© {{ year }} Stan`s Assets. All right reserved
			</div>
			<div class="footer-policies">
				<div class="privacy footer-policies-item">Privacy policy</div>
				<div class="cookies footer-policies-item">Cookies policy</div>
			</div>
		</div>
	</div>
</template>
<script>
import FooterSectionNavigationDefaultList from "@/components/FooterSectionNavigationDefaultList"
import FooterSectionNavigationDefaultListHeader from "@/components/FooterSectionNavigationDefaultListHeader"
import { v4 as uuidv4 } from "uuid"
import { mapState } from "vuex"
export default {
	components: {
		FooterSectionNavigationDefaultList,
		FooterSectionNavigationDefaultListHeader,
	},
	data() {
		return {
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
		iconsWithIds() {
			return this.icons.map((iconArr) => {
				return { id: uuidv4(), icon: iconArr }
			})
		},
		...mapState("pages", ["all"]),
		servicesTabs() {
			return this.all.find((page) => page.name == "Services").nestedTabs
		},
		technologiesTabs() {
			return this.all.find((page) => page.name == "Technologies").nestedTabs
		},
		productTabs() {
			return this.all.filter((page) => !page.nestedTabs)
		},
		aboutUsTabs() {
			return this.all.find((page) => page.name == "About").nestedTabs
		},
	},
	methods: {
		changePage(data) {
			this.$router.push({ name: data.name })
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
	background-size: 100vw auto;
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
				.icon {
					padding: 22px;
					cursor: pointer;
				}
			}
		}
		.products-list {
			.active-header {
				cursor: pointer;
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
	@media screen and (max-width: 496px) {
		height: auto;
		background-size: 100% auto;

		.footer-information-group {
			flex-direction: column;
			padding: 0;
			.footer-logos {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 100px;
				background: #194484;

				.logo {
					height: 50px;
					width: 200px;
				}
				.social-icons {
					max-width: 100% !important;
					.icon {
						font-size: 32px;
					}
				}
			}
			.pb-16 {
				padding-bottom: 16px;
			}
			.background-color {
				background: #194484;
			}
		}

		.footer-copyright-group {
			flex-direction: column-reverse;
			padding: 0;
			.footer-policies {
				flex-direction: row;
				align-items: center;
				.footer-policies-item {
					flex: 0 0 100%;
				}
			}
		}
	}
}
</style>
