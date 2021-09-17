<template>
	<ul class="breadcrumbs">
		<li @click="changePage" class="clicked breadcrumb">home</li>
		<li v-for="item in breadcrumbsItems" :key="item" class="breadcrumb">
			&nbsp;> {{ item }}
		</li>
	</ul>
</template>
<script>
import routeNames from "@/router/routeNames.js"
export default {
	props: {
		page: {
			type: Object,
			required: true,
		},
	},
	computed: {
		breadcrumbsItems() {
			const breadcrumbsItems = []
			breadcrumbsItems.push(this.page.parentText)
			breadcrumbsItems.push(this.page.text)
			return breadcrumbsItems
		},
	},
	methods: {
		changePage() {
			this.$router.push({ name: routeNames.index })
		},
	},
}
</script>
<style lang="scss" scoped>
.breadcrumbs {
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	color: #194484;
	text-transform: capitalize;
	.clicked {
		cursor: pointer;
	}
}
</style>
