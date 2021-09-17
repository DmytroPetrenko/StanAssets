<template>
	<div class="services">
		<the-navigation light />
		<the-home-section :page="page" />
		<clutch-review class="mtb-85" />
		<the-services-section />
		<the-advertisement-section />
		<div class="row mlr-120">
			<base-text-block
				v-for="index in 2"
				:key="index"
				:header="`Header ${index}`"
			/>
		</div>
		<the-contacts-section />
		<recent-projects-section />
		<the-faq-section />
		<footer-section />
	</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
import routeNames from "@/router/routeNames.js"
import TheNavigation from "@/components/TheNavigation.vue"
import TheHomeSection from "@/components/Other/TheHomeSection.vue"
import TheAdvertisementSection from "@/components/TheAdvertisementSection.vue"
import ClutchReview from "@/components/ClutchReview.vue"
import TheServicesSection from "@/components/Other/TheServicesSection.vue"
import TheContactsSection from "@/components/TheContactsSection.vue"
import FooterSection from "@/components/FooterSection.vue"
import RecentProjectsSection from "@/components/RecentProjectsSection.vue"
import TheFaqSection from "@/components/Other/TheFaqSection.vue"
export default {
	components: {
		TheNavigation,
		TheHomeSection,
		TheAdvertisementSection,
		ClutchReview,
		TheServicesSection,
		TheContactsSection,
		FooterSection,
		RecentProjectsSection,
		TheFaqSection,
	},
	computed: {
		...mapGetters("pages", ["getActivePage", "getAllPossiblePages"]),
		page() {
			return this.getActivePage
		},
	},
	created() {
		if (
			this.getAllPossiblePages(routeNames.services).find(
				(page) => page === this.$route.params.id
			)
		) {
			this.setActivePage(this.$route.params.id)
		} else {
			this.$router.replace({ name: routeNames.notFound })
		}
	},
	watch: {
		$route() {
			this.setActivePage(this.$route.params.id)
		},
	},
	methods: {
		...mapActions("pages", ["setActivePage"]),
	},
}
</script>
<style lang="scss" scoped>
.services {
	.row {
		display: flex;
	}
}
</style>
