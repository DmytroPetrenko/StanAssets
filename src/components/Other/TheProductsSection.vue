<template>
	<div class="products plrm-30">
		<base-card
			v-for="product in products"
			:key="product.id"
			:text="product.description"
			:header="product.name"
			:image="product.image"
			textHeight="auto"
			height="auto"
			minHeight="440px"
			width="400px"
			flex
			boxShadow="0px 3px 16px 2px rgba(29, 51, 107, 0.15)"
			class="base-card"
		/>
	</div>
</template>
<script>
import { mapState } from "vuex"
export default {
	computed: {
		...mapState("products", ["products"]),
	},
}
</script>
<style lang="scss" scoped>
.products {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 496px) {
		.base-card::v-deep {
			height: auto !important;
		}
	}
}
</style>
