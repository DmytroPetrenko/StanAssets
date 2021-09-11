<template>
	<div class="card" :style="customStyle">
		<p v-if="text" class="p">{{ text }}</p>
		<img v-if="image" :src="require(`@/assets/${image}`)" class="image" />
	</div>
</template>
<script>
export default {
	props: {
		background: {
			type: String,
			default: null,
		},
		backgroundImage: {
			type: String,
			default: null,
		},
		text: {
			type: String,
			default: null,
		},
		image: {
			type: String,
			default: null,
		},
		boxShadow: {
			type: String,
			default: null,
		},
		height: {
			type: String,
			default: null,
		},
	},
	computed: {
		customStyle() {
			const style = {}

			if (this.background) {
				style["background"] = this.background
			}
			if (this.backgroundImage) {
				style["backgroundImage"] = `url(${require("@/assets/" +
					this.backgroundImage)})`
			}
			if (this.boxShadow) {
				style["boxShadow"] = this.boxShadow
			}
			if (this.height) {
				style["height"] = this.height
			}
			if (style) {
				return style
			}
			return false
		},
	},
}
</script>
<style lang="scss" scoped>
.card {
	flex: 1 1 0;
	min-width: 250px;
	margin: 12px;
	border-radius: 16px;
	height: 100px;
	background-size: 100% auto !important;
	display: flex;
	align-items: center;
	justify-content: center;
	.p {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 26px;
		text-align: center;
		color: #242424;
		padding: 275px 25px 25px 25px;
	}
}
</style>
