<template>
	<base-collapse
		:header="question.question"
		:description="question.description"
	/>
</template>
<script>
export default {
	props: {
		question: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			descriptionStatus: false,
		}
	},
	computed: {
		icon() {
			return this.descriptionStatus ? "chevron-up" : "chevron-down"
		},
	},
	methods: {
		openQuestion() {
			this.descriptionStatus = !this.descriptionStatus
		},
	},
}
</script>
