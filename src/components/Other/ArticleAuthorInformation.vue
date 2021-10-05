<template>
	<div class="author-information">
		<h3 class="header">About the author</h3>
		<div class="author-profile">
			<img :src="require(`@/assets/${author.image}`)" class="author-image" />
			<div class="text-block">
				<author-name-and-social :authorFullName="authorFullName" />

				<p class="author-position">{{ author.position }}</p>

				<hr />

				<p class="author-description">{{ author.description }}</p>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex"
import AuthorNameAndSocial from "@/components/Other/AuthorNameAndSocial"
import utils from "@/utils/utils"
export default {
	components: { AuthorNameAndSocial },
	props: {
		authorId: {
			type: Number,
			required: true,
		},
	},
	computed: {
		...mapGetters("authors", ["getAuthorById"]),
		author() {
			return this.getAuthorById(this.authorId)
		},
		authorFullName() {
			return utils.getAuthorFullName(this.author.name, this.author.surname)
		},
	},
}
</script>
<style lang="scss" scoped>
.author-information {
	.header {
		font-family: "Harabara";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 38px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #0d6eb7;
	}
	.author-profile {
		display: flex;
		.author-image {
			width: 170px;
			height: 170px;
			border-radius: 8px;
		}
		.text-block {
			padding-left: 35px;
			display: flex;
			flex-direction: column;

			.author-position {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 26px;
				color: #242424;
				margin: 0;
			}
			hr {
				border: 1px solid rgba(0, 0, 0, 0.2);
				width: 100%;
			}
			.author-description {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 26px;
				color: #242424;
				margin: 0;
			}
		}
	}
}
</style>
