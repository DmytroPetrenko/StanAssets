<template>
	<div id="portfolio" class="plrm-30">
		<services-section-item
			v-for="(item, index) in all"
			:key="item.id"
			:header="item.header"
			:itemIndex="index"
			:image="item.image"
			portfolio
		/>
	</div>
</template>
<script>
import ServicesSectionItem from "@/components/Index/ServicesSectionItem"
import { mapState } from "vuex"
export default {
	components: {
		ServicesSectionItem,
	},
	computed: {
		...mapState("projects", ["all"]),
	},
}
</script>
<style lang="scss" scoped>
#portfolio {
	margin: 50px 235px;
	@media screen and (max-width: 496px) {
		margin: 0;
	}
}
</style>
