<template>
	<div class="services">
		<the-navigation light />
		<the-home-section :page="page" blog />
		<div v-if="!products && !portfolio && !blog" class="row mlr-120 plrm-30">
			<base-text-block
				v-for="index in 2"
				:key="index"
				:header="`Header ${index}`"
			/>
		</div>
		<the-products-section v-if="products" />
		<the-portfolio-section v-if="portfolio" />
		<the-blog-section v-if="blog" />
		<clutch-review
			v-if="!products && !portfolio && !blog"
			class="mtb-85 mlr-120"
		/>
		<the-services-section v-if="!products && !portfolio && !blog" />
		<the-advertisement-section v-if="!blog" />
		<div v-if="!products && !portfolio && !blog" class="row mlr-120 plrm-30">
			<base-text-block
				v-for="index in 2"
				:key="index"
				:header="`Header ${index}`"
			/>
		</div>
		<the-contacts-section v-if="!blog" class="plrm-30" />
		<recent-projects-section v-if="!products && !portfolio && !blog" />
		<the-faq-section v-if="!products && !portfolio && !blog" />
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
import TheProductsSection from "@/components/Other/TheProductsSection.vue"
import ThePortfolioSection from "@/components/Other/ThePortfolioSection.vue"
import TheBlogSection from "@/components/Other/TheBlogSection.vue"
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
		TheProductsSection,
		ThePortfolioSection,
		TheBlogSection,
	},
	props: {
		section: {
			type: String,
			required: true,
		},
		products: {
			type: Boolean,
			default: false,
		},
		portfolio: {
			type: Boolean,
			default: false,
		},
		blog: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapGetters("pages", ["getActivePage", "getAllPossiblePages"]),
		page() {
			return this.getActivePage
		},
	},
	created() {
		const routeName =
			this.getAllPossiblePages(this.section).length > 1
				? this.$route.params.id
				: this.$route.name
		if (
			this.getAllPossiblePages(this.section).find((page) => page === routeName)
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
.services {
	.row {
		display: flex;
	}
	@media screen and (max-width: 496px) {
		.row {
			flex-direction: column;
			text-align: center;
		}
	}
}
</style>
