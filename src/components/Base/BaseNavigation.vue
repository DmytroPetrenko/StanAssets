<template>
	<ul class="tabs" :class="{ light }">
		<li
			v-for="tab in tabs"
			:key="tab.id"
			class="tab"
			@click="tabClickHandler(tab)"
		>
			{{ tab.text }}
			<font-awesome-icon
				v-if="tab.nestedTabs"
				:icon="['fas', 'angle-down']"
				class="icon mobile-disable"
			/>
			<ul v-if="tab.nestedTabs" class="nestedTabs" :class="isActive(tab.id)">
				<li
					v-for="nestedTab in tab.nestedTabs"
					:key="nestedTab.text"
					@click="changePage({ name: tab.name, params: nestedTab.name })"
					class="nestedTab"
				>
					{{ nestedTab.text }}
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
		light: {
			type: Boolean,
			default: false,
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
		tabClickHandler(tab) {
			this.openNestedTab(tab)
			this.changePage(tab)
		},
		openNestedTab(tab) {
			if (tab.nestedTabs && window.innerWidth > 496) {
				tab.id !== this.activeTabId
					? (this.activeTabId = tab.id)
					: (this.activeTabId = null)
			}
		},
		changePage(data) {
			if (data.params) {
				this.$router.push({ name: data.name, params: { id: data.params } })
			} else {
				if (!data.nestedTabs) {
					this.$router.push({ name: data.name })
				}
			}
			this.$emit("pageChanged")
		},
	},
}
</script>
<style lang="scss" scoped>
.light {
	.tab {
		color: #0d6eb7 !important;
		.nestedTabs {
			background: white !important;
			box-shadow: 2px 4px 16px rgba(158, 158, 158, 0.4) !important;
		}
	}
}
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
				cursor: pointer;
			}
		}
	}
}
@media screen and (max-width: 496px) {
	.tabs {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		.tab {
			color: #0d6eb7;
			font-size: 14px;
			line-height: 18px;
			flex-direction: column;
			align-items: flex-start;
			margin: 10px;
			.nestedTabs {
				display: block !important;
				position: inherit;
				top: 0;
				border-top: none;
				box-shadow: none !important;
				background: none !important;
				.nestedTab {
					white-space: normal;
					float: left;
					width: 100%;
					height: auto;
					word-wrap: break-word;
					margin: 10px;
				}
			}
		}
	}
}
</style>
