<template>
	<div class="question">
		<div class="header">
			<font-awesome-icon :icon="['fas', icon]" @click="collapse" class="icon" />
			<div class="text-block">
				<div @click.prevent="collapse" class="header-block">
					<h6 class="header">
						{{ header }}
					</h6>
					<slot name="header-extension" />
				</div>
			</div>
		</div>
		<div v-if="descriptionStatus" class="description">
			<slot name="description"> {{ description }} </slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		header: {
			type: String,
			default: "Header",
		},
		description: {
			type: String,
			default: "Description",
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
		collapse() {
			this.descriptionStatus = !this.descriptionStatus
		},
	},
}
</script>
<style lang="scss" scoped>
.question {
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgba(5%, 43%, 72%, 0.5);
	.header {
		display: flex;
		flex-grow: 1;

		.icon {
			color: #242424;
			padding: 6px 15px;
			font-size: 20px;
			cursor: pointer;
		}
		.text-block {
			.header {
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
		}
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

	@media screen and (max-width: 496px) {
		.header {
			.text-block {
				.header {
					font-size: 18px;
					line-height: 28px;
				}
			}
		}
		.description {
			padding-left: 50px;
			font-size: 16px;
			line-height: 26px;
		}
	}
}
</style>
