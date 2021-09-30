<template>
	<div class="navigation-list plrm-30">
		<footer-section-navigation-default-list-header>{{
			headerText
		}}</footer-section-navigation-default-list-header>
		<ul class="tabs">
			<li
				v-for="tab in tabs"
				:key="tab.name"
				class="tab"
				@click="changePage(tab)"
			>
				{{ tab.text }}
			</li>
		</ul>
	</div>
</template>
<script>
import FooterSectionNavigationDefaultListHeader from "@/components/FooterSectionNavigationDefaultListHeader"
export default {
	components: { FooterSectionNavigationDefaultListHeader },
	props: {
		tabs: {
			type: Array,
			required: true,
		},
		headerText: {
			type: String,
			default: "Lorem",
		},
	},
	methods: {
		changePage(data) {
			this.$router.push({ name: data.parentName, params: { id: data.name } })
		},
	},
}
</script>
<style lang="scss" scoped>
.navigation-list {
	display: flex;
	flex-direction: column;
	.tabs {
		list-style: none;
		padding-left: 10px;
		.tab {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 34px;
			color: #ffffff;
			cursor: pointer;
		}
	}
}
</style>
