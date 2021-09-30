<template>
	<base-card :text="card.text" :ownStyle="cardStyle" class="base-card" />
</template>
<script>
export default {
	props: {
		card: {
			type: Object,
			required: true,
		},
	},
	computed: {
		cardStyle() {
			const style = {}
			style["backgroundImage"] = `url(${require("@/assets/" +
				this.card.backgroundImage)})`

			return style
		},
	},
}
</script>
<style lang="scss" scoped>
.base-card::v-deep {
	height: 400px;
	max-width: 320px;
	background: rgba(39, 110, 216, 0.05) no-repeat;
	background-size: 100% auto;
	box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
	p {
		padding-top: 300px !important;
	}
}
</style>
