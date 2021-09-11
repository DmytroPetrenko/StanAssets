<template>
	<div id="achivments">
		<base-subheader>achivments</base-subheader>
		<div class="cards">
			<base-card
				v-for="card in cards"
				:key="card.id"
				:text="card.text"
				:background="cardBackground"
				:backgroundImage="card.backgroundImage"
				:boxShadow="cardBoxShadow"
				:height="cardHeight"
			/>
		</div>
	</div>
</template>
<script>
export default {
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
.cards {
	margin: 0 120px;
	display: flex;
}
</style>
