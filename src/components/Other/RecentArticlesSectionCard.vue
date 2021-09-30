<template>
	<base-card :image="post.image" :text="post.text" :header="post.header">
		<template v-slot:additionalInfo>
			<blog-section-item-additional-information :post="post" />
		</template>
		<template v-slot:metaInfo>
			<blog-section-item-meta-information :post="post" />
		</template>
	</base-card>
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
