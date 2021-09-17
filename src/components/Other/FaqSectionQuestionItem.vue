<template>
	<div class="question">
		<font-awesome-icon
			:icon="['fas', icon]"
			@click="openQuestion"
			class="icon"
		/>
		<div class="text-block">
			<h6 @click="openQuestion" class="h6">
				{{ question.question }}
			</h6>
			<p v-if="descriptionStatus" class="description">
				{{ question.description }}
			</p>
			<hr class="hr" />
		</div>
	</div>
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
<style lang="scss" scoped>
.question {
	display: flex;
	.icon {
		color: #242424;
		padding: 6px 15px;
		font-size: 20px;
		cursor: pointer;
	}
	.text-block {
		flex-grow: 1;

		.h6 {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 30px;
			text-transform: capitalize;
			color: #242424;
			margin: 0;
			cursor: pointer;
		}
		.description {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 26px;
			color: #242424;
			margin: 10px 0;
		}
		.hr {
			opacity: 0.5;
			border: 1px solid #0d6eb7;
		}
	}
}
</style>
