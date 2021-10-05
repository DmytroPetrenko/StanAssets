<template>
	<div class="services mlr-120">
		<base-subheader>Services</base-subheader>
		<div class="cards plrm-30">
			<base-card
				v-for="page in activeSection"
				:key="page.name"
				:image="page.imageSm"
				:text="page.text"
				class="base-card"
			/>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex"
import routeNames from "@/router/routeNames"
export default {
	computed: {
		...mapGetters("pages", ["getActiveNestedArray"]),
		activeSection() {
			return this.getActiveNestedArray(routeNames.services)
		},
	},
}
</script>
<style lang="scss" scoped>
.services {
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		.base-card::v-deep {
			box-shadow: 0px 3px 16px 4px rgba(29, 51, 107, 0.1);
			background: #f4f8fd;
			height: 320px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			width: 20%;

			.image-wrapper {
				flex-grow: 1;
				display: flex;
				align-items: center;
				.image {
					height: fit-content;
					width: fit-content;
				}
			}

			.text {
				height: 52px;
			}
		}
	}

	@media screen and (max-width: 496px) {
		.cards {
			box-sizing: border-box;
			.base-card::v-deep {
				width: 34%;
				margin: 20px 10px;
				flex: 1;
				height: auto !important;
				.text {
					margin: 10px 0;
					height: auto;
				}
			}
		}
	}
}
</style>
