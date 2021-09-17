<template>
	<div class="card" :style="customStyle" :class="{ flexCard: flex }">
		<img v-if="image" :src="require(`@/assets/${image}`)" class="image" />
		<h3 v-if="header" class="h3">{{ header }}</h3>
		<p v-if="text" class="p" :style="customHeight">{{ text }}</p>
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
		header: {
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
		textHeight: {
			type: String,
			default: null,
		},
		minHeight: {
			type: String,
			default: null,
		},
		justifyContent: {
			type: String,
			default: null,
		},
		flex: {
			type: Boolean,
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
			if (this.minHeight) {
				style["minHeight"] = this.minHeight
			}
			if (this.justifyContent) {
				style["justifyContent"] = this.justifyContent
			}
			if (style) {
				return style
			}
			return false
		},
		customHeight() {
			const style = {}

			if (this.textHeight) {
				style["height"] = this.textHeight
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
.flexCard {
	flex: 1 1 auto !important;
	align-self: stretch;
	.h3 {
		flex: 1 1 0;
	}
	.p {
		flex: 1 1 0;
	}
	.image {
		flex: 1 1 0;
	}
}
.card {
	flex: 0 0 calc(25% - 72px);
	min-width: 250px;
	margin: 30px 12px;
	border-radius: 16px;
	height: 100px;
	background-size: 100% auto !important;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.h3 {
		font-family: "Harabara";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 38px;
		display: flex;
		align-items: center;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #0d6eb7;
		margin: 0;
		padding: 0 16px;
		text-align: center;
	}
	.p {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 26px;
		text-align: center;
		color: #242424;
		padding: 0 20px;
		height: 52px;
	}
	.image {
		margin: auto;
		max-width: 100%;
	}
}
</style>
