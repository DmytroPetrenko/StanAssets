<template>
	<div class="faq-section">
		<base-subheader>faq`s</base-subheader>
		<div class="questions-list-wrapper mlr-120">
			<div class="icon-container">
				<font-awesome-icon
					:icon="['fas', 'chevron-left']"
					ref="iconLeft"
					class="icon-left"
				/>
			</div>
			<ul class="qustions-list">
				<li v-for="question in questions" :key="question.id" class="question">
					{{ question.question }}
				</li>
			</ul>
			<div class="icon-container">
				<font-awesome-icon
					:icon="['fas', 'chevron-right']"
					ref="iconRight"
					class="icon-right"
				/>
			</div>
		</div>
		<div class="questions-detalization plrm-30">
			<faq-section-question-item
				v-for="question in questions"
				:key="question.id"
				:question="question"
				class="mlr-120"
			/>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex"
import FaqSectionQuestionItem from "@/components/Other/FaqSectionQuestionItem"
export default {
	components: { FaqSectionQuestionItem },
	computed: {
		...mapState("questions", ["questions"]),
	},
	mounted() {
		this.$refs.iconLeft.setAttribute("preserveAspectRatio", "none")
		this.$refs.iconRight.setAttribute("preserveAspectRatio", "none")
	},
}
</script>
<style lang="scss" scoped>
.faq-section {
	.questions-list-wrapper {
		display: flex;
		justify-content: center;
		.icon-container {
			position: relative;
			color: #66d6a0;
			.icon-left {
				position: absolute;
				left: 0;
				top: 0;
				line-height: 0;
				height: 100%;
				fill: black;
			}
			.icon-right {
				position: absolute;
				left: 0px;
				top: 0;
				line-height: 0;
				height: 100%;
				fill: black;
			}
		}
		.qustions-list {
			width: 100%;
			.question {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: 600;
				font-size: 20px;
				line-height: 30px;
				color: #0d6eb7;
			}
		}
	}
	.questions-detalization {
		margin: 60px 0;
	}

	@media screen and (max-width: 496px) {
		.questions-list-wrapper {
      padding: 0 5px;
			.qustions-list {
				.question {
					font-size: 18px;
					line-height: 28px;
				}
			}
		}
	}
}
</style>
