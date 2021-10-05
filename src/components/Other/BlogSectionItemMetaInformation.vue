<template>
	<div class="meta-information">
		<div class="author">
			<img :src="require(`@/assets/${post.image}`)" class="author-image" />
			<p class="author-name">By {{ authorFullName }}</p>
		</div>
		<div class="date">{{ createdDate }}</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex"
import { getAuthorFullName } from "@/utils/stringFormatters"

export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapGetters("authors", ["getAuthorById"]),
		author() {
			return this.getAuthorById(this.post.authorId)
		},
		authorFullName() {
			return getAuthorFullName(this.author.name, this.author.surname)
		},
		createdDate() {
			const year = this.post.createdDate.getFullYear()
			const date = this.post.createdDate.getDate()
			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			]
			const monthName = months[this.post.createdDate.getMonth()]
			return `${monthName} ${date}, ${year}`
		},
	},
}
</script>
<style lang="scss" scoped>
.meta-information {
	display: flex;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 26px;
	color: #242424;
	.author {
		display: flex;
		border-right: 1px solid #b1b1b1;
		.author-name {
			margin: 0;
			padding: 0 8px;
		}
		.author-image {
			width: 30px;
			height: 30px;
			border-radius: 15px;
		}
	}
	.date {
		padding: 0 8px;
	}

	@media screen and (max-width: 496px) {
		justify-content: center;
		flex-wrap: wrap;
		padding: 0 5px;
	}
}
</style>
