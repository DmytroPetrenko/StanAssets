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
			<div
				v-for="index in 3"
				:key="`${index}empty`"
				class="filling-empty-space-childs"
			></div>
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
		display: flex;
		flex-wrap: wrap;
		.base-card::v-deep {
			flex: 1 0 20%;
			height: 160px;
			box-shadow: 0px 3px 16px 4px rgba(29, 51, 107, 0.1);
			background: white;
			max-width: none;
			.image-wrapper {
				margin: auto;
				.image {
					max-width: none;
					height: auto;
				}
			}
		}
		.filling-empty-space-childs {
			flex: 1 0 20%;
			margin: 0 10px;
			height: 0;
		}
	}
	@media screen and (max-width: 496px) {
		.cards {
			padding: 0 5px;
			.base-card::v-deep {
				flex: 1 0 34%;

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
