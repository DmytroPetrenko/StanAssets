<template>
	<button class="btn" :style="customStyle"><slot></slot></button>
</template>
<script>
export default {
	props: {
		backgroundColor: {
			type: String,
			default: null,
		},
		border: {
			type: String,
			default: null,
		},
		color: {
			type: String,
			default: null,
		},
		width: {
			type: String,
			default: null,
		},
	},
	computed: {
		customStyle() {
			let style = null
			if (this.backgroundColor) {
				style = `background: ${this.backgroundColor}; `
			}
			if (this.border) {
				if (style) {
					style += `border: ${this.border}; `
				} else {
					style = `border: ${this.border}; `
				}
			}
			if (this.color) {
				if (style) {
					style += `color: ${this.color}; `
				} else {
					style = `color: ${this.color}; `
				}
			}
			if (this.width) {
				if (style) {
					style += `width: ${this.width}; `
				} else {
					style = `width: ${this.width}; `
				}
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
.btn {
	white-space: nowrap;
	border: 2px solid #ffffff;
	box-sizing: border-box;
	border-radius: 6px;
	background: none;
	color: white;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 36px;
	text-align: center;
	text-transform: uppercase;
	padding: 0 25px;
	min-width: 160px;
}
</style>
