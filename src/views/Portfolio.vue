<template>
	<div class="portfolio">{{ page.name }}</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
import routeNames from "@/router/routeNames.js"
export default {
	computed: {
		...mapGetters("pages", ["getActivePage", "getAllPossiblePages"]),
		page() {
			return this.getActivePage
		},
	},
	created() {
		this.setActivePage(routeNames.portfolio)
	},
	methods: {
		...mapActions("pages", ["setActivePage"]),
	},
}
</script>
