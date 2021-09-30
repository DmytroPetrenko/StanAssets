<template>
	<div class="cards-slider plrm-30">
		<font-awesome-icon
			:icon="['fas', 'chevron-left']"
			class="icon mobile-disable"
			@click="prevImage"
		/>

		<base-card
			v-for="project in projectsForShow"
			:key="project.id"
			:text="project.text"
			:header="project.name"
			:image="project.image"
			class="base-card"
		>
			<template v-if="expanded" v-slot:additionalInfo>
				<blog-section-item-additional-information :post="project" />
			</template>
			<template v-if="expanded" v-slot:metaInfo>
				<blog-section-item-meta-information :post="project" />
			</template>
		</base-card>

		<font-awesome-icon
			:icon="['fas', 'chevron-right']"
			class="icon mobile-disable"
			@click="nextImage"
		/>
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
		cards: {
			type: Array,
			required: true,
		},
		expanded: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			activeCardFirstId: 0,
			activeCardLastId: 3,
			allProjects: [],
		}
	},
	computed: {
		projects: {
			get() {
				if (!this.allProjects.length) {
					return this.cards
				}
				return this.allProjects
			},
			set(value) {
				this.allProjects = Object.assign([], value)
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
.cards-slider {
	display: flex;
	justify-content: center;
	.icon {
		font-size: 26px;
		color: #84b5ff;
		cursor: pointer;
		align-self: center;
	}

	@media screen and (max-width: 496px) {
		flex-direction: column;
		.base-card {
			box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
			border-radius: 16px;
			height: auto !important;
		}
	}
}
</style>
