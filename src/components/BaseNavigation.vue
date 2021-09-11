<template>
	<ul class="tabs">
		<li
			v-for="tab in tabs"
			:key="tab.id"
			class="tab"
			@click="openNestedTab(tab)"
		>
			{{ tab.name }}
			<font-awesome-icon
				v-if="tab.nestedTabs"
				:icon="['fas', 'angle-down']"
				class="icon"
			/>
			<ul v-if="tab.nestedTabs" class="nestedTabs" :class="isActive(tab.id)">
				<li
					v-for="nestedTab in tab.nestedTabs"
					:key="nestedTab"
					class="nestedTab"
				>
					{{ nestedTab }}
				</li>
			</ul>
		</li>
	</ul>
</template>
<script>
export default {
	props: {
		tabs: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			activeTabId: null,
		}
	},
	computed: {
		isActive() {
			return (id) => ({ active: id === this.activeTabId })
		},
	},
	methods: {
		openNestedTab(tab) {
			if (tab.nestedTabs) {
				tab.id !== this.activeTabId
					? (this.activeTabId = tab.id)
					: (this.activeTabId = null)
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.active {
	display: block !important;
}
.tabs {
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	.tab {
		position: relative;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 36px;
		padding: 0 10px;

		display: flex;
		align-items: center;
		text-transform: uppercase;

		color: #ffffff;
		cursor: pointer;
		z-index: 1;

		.icon {
			padding-left: 5px;
		}

		.nestedTabs {
			display: none;
			position: absolute;
			top: 40px;
			list-style: none;
			background: rgba(33, 33, 33, 0.8);
			box-shadow: 2px 4px 16px rgba(158, 158, 158, 0.3);
			border-radius: 0 0 16px 16px;
			padding: 0;
			text-align: start;
			border-top: 3px solid #00a4e8;
			min-width: 100%;
			.nestedTab {
				white-space: nowrap;
				padding: 5px 16px 0;
			}
		}
	}
}
</style>
