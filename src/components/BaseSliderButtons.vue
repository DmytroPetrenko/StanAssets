<template>
	<div class="slider-buttons">
		<div
			v-for="index in 3"
			:key="index"
			class="slider-button"
			:class="isActive(index)"
			@click="changeActiveSlide(index)"
		></div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			activeIndex: 1,
		}
	},
	computed: {
		isActive() {
			return (index) => ({ active: index === this.activeIndex })
		},
	},
	methods: {
		changeActiveSlide(index) {
			this.activeIndex = index
			this.$emit("changeActiveBackgroundIndex", index)
		},
	},
}
</script>
<style lang="scss" scoped>
.active {
	background-color: white;
}
.slider-buttons {
	display: flex;
	margin-top: 20px;
	.slider-button {
		width: 20px;
		height: 20px;
		border-radius: 20px;
		border: 3px solid #ffffff;
		box-sizing: border-box;
		margin: 10px;
	}
}
</style>
