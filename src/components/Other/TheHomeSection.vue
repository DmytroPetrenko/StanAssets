<template>
	<div id="home">
		<div class="row">
			<div class="text-block">
				<base-breadcrumbs :page="page" class="mt-44" />
				<h1 class="h1">{{ page.text }}</h1>
			</div>
			<div class="image-block">
				<img :src="require(`@/assets/${page.image}`)" />
			</div>
			<base-links />
		</div>
		<div class="row">
			<base-text-block
				v-for="index in 2"
				:key="index"
				:header="`Header ${index}`"
			/>
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
}
</style>
