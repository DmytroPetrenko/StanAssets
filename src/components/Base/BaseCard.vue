<template>
	<div class="card" :style="ownStyle">
		<slot name="additionalInfo" />
		<div class="image-wrapper">
			<img v-if="image" :src="require(`@/assets/${image}`)" class="image" />
		</div>
		<slot name="metaInfo" />
		<h3 v-if="header" class="h3">{{ header }}</h3>
		<p v-if="text" class="p">{{ text }}</p>
	</div>
</template>
<script>
export default {
	props: {
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
		ownStyle: {
			type: Object,
			default: null,
		},
	},
}
</script>
<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	max-width: 25%;
	margin: 10px;
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
	}
	.image {
		max-width: 100%;
		height: 300px;
		border-radius: 16px;
	}

	@media screen and (max-width: 496px) {
		max-width: 100% !important;
		height: 400px !important;

		.h3 {
			font-size: 18px;
			line-height: 38px;
		}
		.p {
			font-size: 16px;
			line-height: 26px;
		}
	}
}
</style>
