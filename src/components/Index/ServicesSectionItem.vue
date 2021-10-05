<template>
	<div class="services-item" :class="{ portfolio }">
		<div v-if="isTextFirst" class="imageRight">
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
export default {
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
		portfolio: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		isTextFirst() {
			if (window.innerWidth > 496) {
				if (this.itemIndex % 2) return false
			}
			return true
		},
	},
}
</script>
<style lang="scss" scoped>
.portfolio {
	box-shadow: 0px 3px 16px rgba(29, 51, 107, 0.15);
	border-radius: 12px;
	margin: 40px 0;
}
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

	@media screen and (max-width: 496px) {
		flex-direction: column;
		text-align: center;
	}
}
</style>
