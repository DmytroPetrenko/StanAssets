<template>
	<div class="services-item">
		<div v-if="!(itemIndex % 2)" class="imageRight">
			<base-text-block :header="header" />
			<div class="image-wrapper">
				<img v-if="image" :src="require(`@/assets/${image}`)" class="image" />
			</div>
		</div>
		<div v-else class="imageLeft">
			<div class="image-wrapper">
				<img v-if="image" :src="require(`@/assets/${image}`)" class="image" />
			</div>
			<base-text-block :header="header" />
		</div>
	</div>
</template>
<script>
import BaseTextBlock from "../Base/BaseTextBlock.vue"
export default {
	components: { BaseTextBlock },
	props: {
		itemIndex: {
			type: Number,
			default: 1,
		},
		header: {
			type: String,
			default: "Header",
		},
		image: {
			type: String,
			default: null,
		},
	},
}
</script>
<style lang="scss" scoped>
.services-item > div {
	display: flex;
	align-items: center;

	.image-wrapper {
		flex: 1 1 0;
		padding: 10px;
		.image {
			max-width: 100%;
		}
	}
}
</style>
