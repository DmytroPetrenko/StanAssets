<template>
	<ul class="breadcrumbs">
		<li @click="goHomePage" class="clicked breadcrumb">home</li>
		<li v-for="item in breadcrumbsItems" :key="item" class="breadcrumb">
			<span
				v-if="item"
				@click="goParentPage(item)"
				class="breadcrumb-item-wrapper"
			>
				&nbsp;> {{ item }}
			</span>
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
		goHomePage() {
			this.$router.push({ name: routeNames.index })
		},
		goParentPage(parent) {
			if (this.page.name === "Blog" && parent === "Blog") {
				this.$router.push({ name: routeNames.blog })
			}
			if (parent === "Team") {
				this.$router.push({ name: routeNames.about, params: { id: "team" } })
			}
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
	@media screen and (max-width: 496px) {
		flex-wrap: wrap;
	}
	.breadcrumb {
		white-space: nowrap;
	}
	.clicked {
		cursor: pointer;
	}
}
</style>
