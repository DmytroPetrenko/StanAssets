<template>
	<div class="technologies">{{ page.name }}</div>
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
		if (
			this.getAllPossiblePages(routeNames.technologies).find(
				(page) => page === this.$route.params.id
			)
		) {
			this.setActivePage(this.$route.params.id)
		} else {
			this.$router.replace({ name: routeNames.notFound })
		}
	},
	methods: {
		...mapActions("pages", ["setActivePage"]),
	},
}
</script>
