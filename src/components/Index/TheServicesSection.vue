<template>
	<div id="services">
		<base-subheader>services</base-subheader>
		<services-section-item
			v-for="(item, index) in servicesSectionItems"
			:key="item.id"
			:header="item.header"
			:itemIndex="index"
			:image="item.image"
		/>
	</div>
</template>
<script>
import ServicesSectionItem from "@/components/Index/ServicesSectionItem"
export default {
	components: {
		ServicesSectionItem,
	},
	data() {
		return {
			servicesSectionItems: [
				{ id: 1, header: "Game Development", image: "services_gd.png" },
				{ id: 2, header: "SDK Development", image: "services_unity.png" },
				{ id: 3, header: "3D modeling services", image: "services_3d.png" },
				{ id: 4, header: "VR app Development", image: "services_360.png" },
			],
		}
	},
}
</script>
<style lang="scss" scoped>
#services {
	margin: 50px 235px;
}
</style>
