<template>
	<div class="voter">
		<p class="text">
			<slot>How helpful was this article?</slot>
		</p>
		<div class="stars">
			<font-awesome-icon
				v-for="index in solidStarCount"
				:key="`${index}solid`"
				:icon="solidIcon"
				@mouseover="paintStars(index)"
				@mouseout="eraiseStars"
				@click="vote(index)"
				class="star"
			/>
			<font-awesome-icon
				v-for="index in regularStarCount"
				:key="`${index}regular`"
				:icon="regularIcon"
				@mouseover="paintStars(index)"
				@click="vote(index)"
				class="star"
			/>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			regularIcon: ["far", "star"],
			solidIcon: ["fas", "star"],
			regularStarCount: 5,
			solidStarCount: 0,
		}
	},
	methods: {
		vote(index) {
			this.$emit("vote", index)
		},
		paintStars(index) {
			this.regularStarCount = 5 - index
			this.solidStarCount = index
		},
		eraiseStars() {
			this.regularStarCount = 5
			this.solidStarCount = 0
		},
	},
}
</script>
<style lang="scss" scoped>
.voter {
	background: #f0f5fc;
	box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
	border-radius: 16px;
	padding: 36px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.text {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 26px;
		color: #242424;
	}

	.stars {
		display: flex;
		.star {
			color: #717171;
			box-sizing: border-box;
			margin: 5px;
			cursor: pointer;
		}
	}
}
</style>
