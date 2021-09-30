<template>
	<nav>
		<ul class="pagination">
			<li @click="decreaseActiveTab" class="page-item">
				<a class="page-link">
					<font-awesome-icon :icon="['fas', 'chevron-left']" class="icon" />
				</a>
			</li>
			<li
				@click="activeTab = num"
				v-for="num in pagesCount"
				:key="num"
				:class="{ active: activeTab === num }"
				class="page-item"
			>
				<a class="page-link">{{ num }}</a>
			</li>
			<li @click="increaseActiveTab" class="page-item">
				<a class="page-link">
					<font-awesome-icon :icon="['fas', 'chevron-right']" class="icon" />
				</a>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
	props: {
		pagesCount: {
			type: Number,
			default: 1,
		},
	},
	data() {
		return {
			activeTab: 1,
		}
	},
	watch: {
		activeTab() {
			this.$emit("changeActiveTab", this.activeTab)
		},
	},
	methods: {
		decreaseActiveTab() {
			if (this.activeTab > 1) {
				this.activeTab--
			}
		},
		increaseActiveTab() {
			if (this.activeTab < this.pagesCount) {
				this.activeTab++
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.active {
	color: rgba(39, 79, 139, 1);
}
.pagination {
	display: flex;
	justify-content: center;
	list-style: none;
	font-family: "Harabara";
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 38px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: rgba(39, 79, 139, 0.6);
	.page-item {
		cursor: pointer;
		padding: 12px;
		margin: 0;
	}
}
</style>
