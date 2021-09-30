<template>
	<div class="text-block-item">
		<font-awesome-icon v-if="icon" :icon="icon" class="icon" />
		<p class="p">{{ text }}</p>
	</div>
</template>
<script>
export default {
	props: {
		icon: {
			type: Array,
			default: null,
		},
		text: {
			type: String,
			default: "Lorem",
		},
	},
}
</script>
<style lang="scss" scoped>
.text-block-item {
	display: flex;
	align-items: center;
	svg {
		padding: 5px;
		color: #276ed8;
		font-size: 18px;
	}
	.p {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
		display: flex;
		align-items: center;
		text-transform: capitalize;
		color: #242424;
		padding: 5px;
		margin: 0;
	}
	@media screen and (max-width: 496px) {
		svg {
			font-size: 14px;
		}
		.p {
			font-size: 20px;
			line-height: 30px;
		}
	}
}
</style>
