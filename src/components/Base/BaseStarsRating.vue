<template>
	<div class="stars">
		<div v-if="greenStarLength" class="green-icons">
			<font-awesome-icon
				v-for="index in greenStarLength"
				:key="`green${index}`"
				:icon="['fas', 'star']"
				class="star"
			/>
		</div>
		<div v-if="whiteStarLength" class="white-icons">
			<font-awesome-icon
				v-for="index in whiteStarLength"
				:key="`white${index}`"
				:icon="['fas', 'star']"
				class="star"
			/>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		rating: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		greenStarLength() {
			return Math.round(this.rating)
		},
		whiteStarLength() {
			return 5 - this.greenStarLength
		},
	},
}
</script>
<style lang="scss" scoped>
.stars {
	display: flex;
	.green-icons {
		color: #06b25f;
		display: flex;
	}
	.white-icons {
		color: #e1e1e1;
		display: flex;
	}
	.star {
		margin: 5px;
	}
}
</style>
