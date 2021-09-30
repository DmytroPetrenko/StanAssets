<template>
	<div class="recent-articles">
		<base-subheader>Recent Articles</base-subheader>
		<base-cards-slider
			v-if="lastArticles.length"
			:cards="lastArticles"
			expanded
			class="card"
		/>
		<div class="no-articles" v-else>Sorry, the author don`t have articles</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
	props: {
		authorId: {
			type: Number,
			default: null,
		},
	},
	computed: {
		...mapGetters("posts", ["getArticlesByDate", "getAuthorArticlesByDate"]),
		lastArticles() {
			if (this.authorId !== null) {
				return this.getAuthorArticlesByDate(this.authorId)
			}
			return this.getArticlesByDate
		},
	},
}
</script>
<style lang="scss" scoped>
.card::v-deep {
	.card {
		box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
		border-radius: 16px;
		.additional-information,
		.meta-information {
			padding: 10px 0;
		}
	}
}
.no-articles {
	text-align: center;
}
</style>
