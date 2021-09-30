<template>
	<div id="home">
		<div class="row">
			<div class="text-block">
				<base-breadcrumbs :page="page" class="mt-44" />
				<h1 class="h1" :class="{ 'mtb-40': blog }">{{ page.text }}</h1>
			</div>
			<div v-if="page.image" class="image-block">
				<img :src="require(`@/assets/${page.image}`)" class="image" />
			</div>
			<base-links />
		</div>
	</div>
</template>
<script>
export default {
	props: {
		page: {
			type: Object,
			required: true,
		},
		blog: {
			type: Boolean,
			default: false,
		},
	},
}
</script>
<style lang="scss" scoped>
#home {
	padding: 0 120px;
	.row {
		display: flex;
		.text-block {
			flex: 1 1 0;
			.h1 {
				font-family: "Harabara";
				font-style: normal;
				font-weight: bold;
				font-size: 44px;
				line-height: 60px;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: #194484;
				margin: 120px 0;
			}
		}
		.image-block {
			flex: 1 1 0;
		}
	}
	@media screen and (max-width: 496px) {
		padding: 0 30px;
		.row {
			flex-direction: column;
			.text-block {
				.h1 {
					text-align: center;
					font-size: 24px;
					line-height: 38px;
					margin: 30px 0;
				}
			}
			.image-block {
				.image {
					max-width: 100%;
				}
			}
		}
	}
}
</style>
