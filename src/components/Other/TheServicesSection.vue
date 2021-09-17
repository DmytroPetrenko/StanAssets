<template>
	<div class="services mlr-120">
		<base-subheader>Services</base-subheader>
		<div class="cards">
			<base-card
				v-for="page in activeSection"
				:key="page.name"
				:image="page.imageSm"
				:text="page.text"
				background="#F4F8FD"
				boxShadow="0px 3px 16px 4px rgba(29, 51, 107, 0.1)"
				height="320px"
			/>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex"
import routeNames from "@/router/routeNames"
export default {
	computed: {
		...mapGetters("pages", ["getActiveNestedArray"]),
		activeSection() {
			return this.getActiveNestedArray(routeNames.services)
		},
	},
}
</script>
<style lang="scss" scoped>
.services {
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		widows: 100%;
	}
}
</style>
