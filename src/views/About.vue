<template>
	<div class="about">
		<the-navigation light />
		<base-breadcrumbs v-if="!isJoinPage" :page="page" class="mlr-120 plrm-30" />
		<the-home-section v-if="isJoinPage" :page="page" />
		<the-join-section v-if="isJoinPage" />
		<the-team-section v-if="isTeamPage" />
		<the-contact-page-contacts-section v-if="isContactPage" class="mlr-120" />
		<the-advertisement-section v-if="!isJoinPage" />
		<the-contacts-section v-if="!isContactPage && !isJoinPage" />
		<recent-projects-section v-if="!isJoinPage" />
		<footer-section />
	</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
import routeNames from "@/router/routeNames.js"
import TheNavigation from "@/components/TheNavigation"
import TheTeamSection from "@/components/Other/TheTeamSection"
import TheHomeSection from "@/components/Other/TheHomeSection"
import TheJoinSection from "@/components/Other/TheJoinSection"
import TheAdvertisementSection from "@/components/TheAdvertisementSection"
import TheContactsSection from "@/components/TheContactsSection.vue"
import TheContactPageContactsSection from "@/components/Other/TheContactPageContactsSection.vue"
import RecentProjectsSection from "@/components/RecentProjectsSection.vue"
import FooterSection from "@/components/FooterSection.vue"
export default {
	components: {
		TheNavigation,
		TheTeamSection,
		TheAdvertisementSection,
		TheContactsSection,
		RecentProjectsSection,
		FooterSection,
		TheContactPageContactsSection,
		TheHomeSection,
		TheJoinSection,
	},
	computed: {
		...mapGetters("pages", ["getActivePage", "getAllPossiblePages"]),
		page() {
			return this.getActivePage
		},
		isTeamPage() {
			return this.page.name.toLowerCase() === routeNames.team.toLowerCase()
		},
		isContactPage() {
			return this.page.name.toLowerCase() === routeNames.contacts.toLowerCase()
		},
		isJoinPage() {
			return this.page.name.toLowerCase() === routeNames.join.toLowerCase()
		},
	},
	created() {
		const routeName =
			this.getAllPossiblePages(routeNames.about).length > 1
				? this.$route.params.id
				: this.$route.name
		if (
			this.getAllPossiblePages(routeNames.about).find(
				(page) => page === routeName
			)
		) {
			this.setActivePage(routeName)
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
.contact-special::v-deep {
	background: none;
}
</style>
