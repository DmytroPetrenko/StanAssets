<template>
	<div class="recent mlr-120">
		<base-subheader>Recent Projects</base-subheader>
		<div class="cards">
			<font-awesome-icon
				:icon="['fas', 'chevron-left']"
				class="icon"
				@click="prevImage"
			/>
			<base-card
				v-for="project in projectsForShow"
				:key="project.id"
				:text="project.description"
				:header="project.name"
				:image="project.image"
				textHeight="auto"
				height="auto"
				minHeight="400px"
				flex
				boxShadow="0px 3px 16px 2px rgba(29, 51, 107, 0.15)"
			/>
			<font-awesome-icon
				:icon="['fas', 'chevron-right']"
				class="icon"
				@click="nextImage"
			/>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex"
export default {
	data() {
		return {
			activeCardFirstId: 0,
			activeCardLastId: 3,
			allProjects: [],
		}
	},
	computed: {
		...mapState("projects", ["all"]),
		projects: {
			get() {
				if (!this.allProjects.length) {
					return this.all
				}
				return this.allProjects
			},
			set(value) {
				this.allProjects = value
			},
		},
		projectsForShow() {
			if (this.projects.length > 3) {
				return this.projects.slice(
					this.activeCardFirstId,
					this.activeCardLastId
				)
			}
			return this.projects
		},
	},
	methods: {
		nextImage() {
			if (this.activeCardLastId > this.projects.length) {
				this.activeCardFirstId++
				this.activeCardLastId++
			}
			const array = this.projects
			const firstElement = this.projects.shift()
			array.push(firstElement)
			this.projects = array
		},
		prevImage() {
			if (this.activeCardFirstId > 0) {
				this.activeCardFirstId--
				this.activeCardLastId--
			}
			const array = this.projects
			const lastElement = this.projects.pop()
			array.unshift(lastElement)
			this.projects = array
		},
	},
}
</script>
<style lang="scss" scoped>
.recent {
	.cards {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: stretch;
		.icon {
			font-size: 26px;
			color: #84b5ff;
			cursor: pointer;
		}
	}
}
</style>
