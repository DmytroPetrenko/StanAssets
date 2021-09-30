<template>
	<div id="partners">
		<base-subheader>partners</base-subheader>
		<div class="cards">
			<base-card
				v-for="card in cards"
				:key="card.id"
				:image="card.image"
				class="base-card"
			/>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			cards: [
				{ id: 1, image: "partner1.png" },
				{ id: 2, image: "partner2.png" },
				{ id: 3, image: "partner3.png" },
				{ id: 4, image: "partner4.png" },
				{ id: 5, image: "partner5.png" },
				{ id: 6, image: "partner6.png" },
				{ id: 7, image: "partner7.png" },
				{ id: 8, image: "partner8.png" },
				{ id: 9, image: "partner9.png" },
				{ id: 10, image: "partner10.png" },
				{ id: 11, image: "partner11.png" },
				{ id: 12, image: "partner12.png" },
				{ id: 13, image: "partner13.png" },
				{ id: 14, image: "partner14.png" },
			],
		}
	},
}
</script>
<style lang="scss" scoped>
#partners {
	background: url("~@/assets/partners_bg.png");
	background-size: 100% 100%;
	padding: 100px 0;
	.cards {
		padding: 0 120px;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		.base-card::v-deep {
			flex-grow: 1;
			height: 160px;
			box-shadow: 0px 3px 16px 4px rgba(29, 51, 107, 0.1);
			background: white;
			width: 20%;
			max-width: 280px;
			.image-wrapper {
				margin: auto;
				.image {
					max-width: none;
					height: auto;
				}
			}
		}
	}
	@media screen and (max-width: 496px) {
		.cards {
			padding: 0 5px;
			.base-card::v-deep {
				width: 34%;
				height: 75px !important;
				.image-wrapper {
					max-width: 100%;
					max-height: 100%;
					.image {
						max-width: 100%;
						max-height: 100%;
					}
				}
			}
		}
	}
}
</style>
