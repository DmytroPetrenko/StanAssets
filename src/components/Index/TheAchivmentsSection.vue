<template>
	<div id="achivments">
		<base-subheader>achivments</base-subheader>
		<div class="cards">
			<achivments-section-card
				v-for="card in cards"
				:key="card.id"
				:card="card"
			/>
		</div>
	</div>
</template>
<script>
import AchivmentsSectionCard from "@/components/Index/AchivmentsSectionCard"
export default {
	components: {
		AchivmentsSectionCard,
	},
	data() {
		return {
			cardHeight: "400px",
			cardBackground: "rgba(39, 110, 216, 0.05) no-repeat",
			cardBoxShadow: "0px 3px 16px 2px rgba(29, 51, 107, 0.15)",
			cards: [
				{
					id: 1,
					text: "Lorem ipsum dolor sit amet consectetur.",
					backgroundImage: "ach1.png",
				},
				{
					id: 2,
					text: "Lorem ipsum dolor sit amet consectetur.",
					backgroundImage: "ach2.png",
				},
				{
					id: 3,
					text: "Lorem ipsum dolor sit amet consectetur.",
					backgroundImage: "ach3.png",
				},
				{
					id: 4,
					text: "Lorem ipsum dolor sit amet consectetur.",
					backgroundImage: "ach4.png",
				},
			],
		}
	},
}
</script>
<style lang="scss" scoped>
#achivments {
	margin: 0 120px;
	.cards {
		display: flex;
		width: 100%;
	}

	@media screen and (max-width: 496px) {
		margin: 0 5px;
		.cards {
			flex-direction: column;
		}
	}
}
</style>
