<template>
	<div class="article-section">
		<the-navigation light />
		<base-breadcrumbs
			:page="{
				parentText: 'Blog',
				text: `Article ${article.id + 1}`,
				name: 'Blog',
			}"
			class="mlr-120"
		/>
		<div class="article">
			<base-subheader>Article {{ article.id + 1 }}</base-subheader>
			<div class="article-help-information">
				<blog-section-item-additional-information :post="article" />
				<font-awesome-icon :icon="['fas', 'share-alt']" class="icon" />
			</div>
			<img :src="require(`@/assets/${article.image}`)" class="image" />
			<blog-section-item-meta-information :post="article" />
			<div class="text-block">
				<p v-for="(text, index) in article.fullText" :key="index">{{ text }}</p>
			</div>
			<base-voter @vote="changeArticleRating" />
			<article-author-information :authorId="article.authorId" />
		</div>
		<the-advertisement-section />
		<the-recent-articles-section />
		<footer-section />
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
import routeNames from "vuex"
import TheNavigation from "@/components/TheNavigation.vue"
import BlogSectionItemAdditionalInformation from "@/components/Other/BlogSectionItemAdditionalInformation"
import BlogSectionItemMetaInformation from "@/components/Other/BlogSectionItemMetaInformation"
import ArticleAuthorInformation from "@/components/Other/ArticleAuthorInformation"
import TheAdvertisementSection from "@/components/TheAdvertisementSection"
import TheRecentArticlesSection from "@/components/Other/TheRecentArticlesSection"
import FooterSection from "@/components/FooterSection.vue"
export default {
	components: {
		TheNavigation,
		BlogSectionItemAdditionalInformation,
		BlogSectionItemMetaInformation,
		ArticleAuthorInformation,
		TheAdvertisementSection,
		TheRecentArticlesSection,
		FooterSection,
	},
	computed: {
		...mapGetters("posts", ["getArticleById"]),
		article() {
			return this.getArticleById(this.$route.params.id)
		},
	},
	created() {
		this.setActivePage(routeNames.article)
	},
	mounted() {
		this.changeArticleViewsById(this.article.id)
	},
	methods: {
		...mapActions("pages", ["setActivePage"]),
		...mapActions("posts", [
			"changeArticleRatingById",
			"changeArticleViewsById",
		]),
		changeArticleRating(rating) {
			this.changeArticleRatingById({
				articleId: this.article.id,
				ratingFromUser: rating,
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	padding: 0 350px;
	.article-help-information {
		display: flex;
		justify-content: space-between;
		color: #b1b1b1;
		.icon {
			padding: 5px;
		}
	}
	.image {
		width: 100%;
		max-height: 300px;
	}
	.text-block {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 26px;
		color: #242424;
	}
}
</style>
