<template>
	<div id="home" :style="activeBackground">
		<the-navigation />
		<div class="main">
			<div class="textblock">
				<div class="text">
					<h1 class="h1 mobile-disable">
						Stan`s assets - it outsourcing development company
					</h1>
					<h4 class="h4">Focus on product and let us do rest!</h4>
					<p class="p mobile-disable">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam
						asperiores quibusdam itaque harum aut iure unde assumenda at minus?
						<br />A eveniet quis, ullam commodi ipsam itaque harum aperiam
						voluptates adipisci repellat atque dolor possimus dignissimos
						officiis beatae eum! Sequi!
					</p>
				</div>
				<div class="button-block">
					<base-button class="mr-24 button first-button">More</base-button>
					<base-button background-color="#06B25F" border="none" class="button">
						Contact us
					</base-button>
					<base-slider-buttons
						class="mobile-disable"
						@changeActiveBackgroundIndex="changeActiveBackgroundIndex"
					/>
				</div>
			</div>
			<base-links />
		</div>
	</div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue"
export default {
	components: {
		TheNavigation,
	},
	data() {
		return {
			activeBackgroundIndex: 1,
		}
	},
	computed: {
		activeBackground() {
			return {
				backgroundImage: `url(${require("@/assets/" +
					this.activeBackgroundImage)})`,
			}
		},
		activeBackgroundImage() {
			return `home-background${this.activeBackgroundIndex}.png`
		},
	},
	methods: {
		changeActiveBackgroundIndex(index) {
			this.activeBackgroundIndex = index
		},
	},
}
</script>

<style lang="scss" scoped>
#home {
	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 940px;
	width: auto;
	background-size: cover;

	.main {
		position: relative;
		flex-basis: 200px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.textblock {
			padding: 0 120px;
			max-width: 50%;
			margin-bottom: auto;
			margin-top: 100px;

			.text {
				.h1 {
					font-family: "Harabara";
					font-style: normal;
					font-weight: bold;
					font-size: 44px;
					line-height: 60px;
					letter-spacing: 0.06em;
					text-transform: uppercase;
					margin: 0;
					color: #ffffff;
				}
				.h4 {
					font-family: "Harabara";
					font-style: normal;
					font-weight: bold;
					font-size: 29px;
					line-height: 38px;
					letter-spacing: 0.05em;
					text-transform: uppercase;
					margin: 10px 0;
					color: #44c9ff;
				}
				.p {
					font-family: "Montserrat";
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					line-height: 26px;
					color: #ffffff;
					margin: 0;
				}
			}
			.button-block {
				margin-top: 36px;
			}
		}
	}

	@media screen and (max-width: 496px) {
		min-height: 450px;
		.main {
			flex-grow: 0;
			.textblock {
				padding: 0 60px;
				max-width: none;
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 60px 0;
				.text {
					text-align: center;
					.h4 {
						font-family: "Harabara";
						font-style: normal;
						font-weight: bold;
						font-size: 24px;
						line-height: 38px;
						text-align: center;
						letter-spacing: 0.05em;
						text-transform: uppercase;
						color: #ffffff;
					}
				}
			}
			.button-block {
				display: flex;
				.button::v-deep {
					min-width: 60px !important;
					flex: 1;
				}
				.first-button {
					margin-right: 20px;
				}
			}
		}
	}
}
</style>
