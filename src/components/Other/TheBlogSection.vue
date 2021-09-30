<template>
	<div class="blog plrm-30">
		<blog-section-item
			v-for="post in postsForShow"
			:key="post.id"
			:post="post"
			@click.native="goToArticle(post.id)"
			class="mlr-120"
		/>
		<base-pagination
			:pagesCount="pagesCount"
			@changeActiveTab="changeActivePosts"
			class="mobile-disable"
		/>
	</div>
</template>
<script>
import { mapState } from "vuex"
import BlogSectionItem from "@/components/Other/BlogSectionItem"
import routeNames from "@/router/routeNames"
export default {
	components: {
		BlogSectionItem,
	},
	data() {
		return {
			postsOnPage: 2,
			lastActivePost: 2,
		}
	},
	computed: {
		...mapState("posts", ["posts"]),

		pagesCount() {
			return Math.ceil(this.posts.length / this.postsOnPage)
		},
		postsForShow() {
			return this.posts.slice(
				this.lastActivePost - this.postsOnPage,
				this.lastActivePost
			)
		},
	},
	methods: {
		changeActivePosts(pageIndex) {
			this.lastActivePost = this.postsOnPage * pageIndex
		},
		goToArticle(id) {
			this.$router.push({ name: routeNames.article, params: { id: id } })
		},
	},
}
</script>
