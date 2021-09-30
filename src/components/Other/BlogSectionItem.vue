<template>
	<div class="blog-section-item">
		<img :src="require(`@/assets/${post.image}`)" class="post-image" />
		<div class="information">
			<blog-section-item-additional-information :post="post" />
			<div class="text-block">
				<h3 class="text-header">{{ post.header }}</h3>
				<p class="text">{{ post.text }}</p>
			</div>
			<blog-section-item-meta-information :post="post" />
		</div>
	</div>
</template>
<script>
import BlogSectionItemAdditionalInformation from "@/components/Other/BlogSectionItemAdditionalInformation"
import BlogSectionItemMetaInformation from "@/components/Other/BlogSectionItemMetaInformation"
export default {
	components: {
		BlogSectionItemAdditionalInformation,
		BlogSectionItemMetaInformation,
	},
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.blog-section-item {
	display: flex;
	background: #ffffff;
	box-shadow: 0px 3px 16px rgba(29, 51, 107, 0.15);
	border-radius: 12px;
	margin: 32px 0;
	.post-image {
		max-width: 25%;
		border-radius: 12px 0 0 12px;
	}
	.information {
		padding: 20px 40px 20px 70px;

		.text-block {
			.text-header {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: bold;
				font-size: 24px;
				line-height: 26px;
				text-transform: capitalize;
				color: #242424;
			}
			.text {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 26px;
				color: #242424;
			}
		}
	}

	@media screen and (max-width: 496px) {
		flex-direction: column;
		.post-image {
			max-width: 100%;
		}
		.information {
			padding: 0;
			.text-block {
				padding: 0 15px;
			}
		}
	}
}
</style>
