<template>
	<div id="home" :style="activeBackground">
		<the-navigation />
		<div class="main">
			<div class="textblock">
				<div class="text">
					<h1 class="h1">Stan`s assets - it outsourcing development company</h1>
					<h4 class="h4">Focus on product and let us do rest!</h4>
					<p class="p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam
						asperiores quibusdam itaque harum aut iure unde assumenda at minus?
						<br />A eveniet quis, ullam commodi ipsam itaque harum aperiam
						voluptates adipisci repellat atque dolor possimus dignissimos
						officiis beatae eum! Sequi!
					</p>
				</div>
				<div class="button-block">
					<base-button class="mr-24">More</base-button>
					<base-button background-color="#06B25F" border="none">
						Contact us
					</base-button>
					<base-slider-buttons
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
	/* background: url("~@/assets/home-background.png"); */
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
}
</style>
