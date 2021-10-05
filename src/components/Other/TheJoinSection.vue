<template>
	<div class="join plrm-30">
		<div class="text-blocks mlr-120">
			<base-text-block
				v-for="index in 2"
				:key="index"
				:header="null"
				class="text-block"
			/>
		</div>
		<base-subheader>current openings</base-subheader>
		<div class="positions mlr-120">
			<base-collapse
				v-for="position in openingPositions"
				:key="position.id"
				:header="position.position"
				:class="{ borderBottom: isCollapsed }"
				@click.native="collapsed"
				class="base-collapse"
			>
				<template slot="header-extension">
					<base-button
						@click.native.stop="openPopup(position.position)"
						color="white"
						backgroundColor="#06B25F"
						class="button mobile-disable"
						>Apply</base-button
					>
				</template>
				<template slot="description">
					<div
						v-for="obj in position.description"
						:key="obj.subheader"
						class="description"
					>
						<h6 class="subheader">{{ obj.subheader }}</h6>
						<ul class="list">
							<li v-for="li in obj.list" :key="li" class="li">{{ li }}</li>
						</ul>
					</div>
				</template>
			</base-collapse>
		</div>
		<the-join-section-popup ref="joinPopup" />
	</div>
</template>
<script>
import { mapState } from "vuex"
import TheJoinSectionPopup from "@/components/Other/TheJoinSectionPopup"
export default {
	components: {
		TheJoinSectionPopup,
	},
	data() {
		return {
			isCollapsed: false,
		}
	},
	computed: {
		...mapState("openingPositions", ["openingPositions"]),
	},
	methods: {
		openPopup(position) {
			this.$refs.joinPopup.openPopup(position)
		},
		collapsed() {
			this.isCollapsed = !this.isCollapsed
		},
	},
}
</script>
<style lang="scss">
.borderBottom {
	.header {
		border-bottom: 1px solid rgba(25, 68, 132, 0.2);
	}
}
</style>
<style lang="scss" scoped>
.join {
	.text-blocks {
		display: flex;
		.text-block {
			flex: 1 1 0;
		}
	}
	.positions {
		.base-collapse::v-deep {
			box-shadow: 0px 3px 16px rgba(29, 51, 107, 0.15);
			border-radius: 12px;
			margin: 24px 0;
			border-bottom: none;

			.header {
				padding: 29px;

				.icon {
					color: #194484;
					font-size: 24px;
				}
				.text-block {
					flex-grow: 1;
					.header-block {
						display: flex;
						justify-content: space-between;

						.header {
							font-family: "Harabara";
							font-style: normal;
							font-weight: bold;
							font-size: 24px;
							line-height: 38px;
							letter-spacing: 0.05em;
							text-transform: uppercase;
							color: #194484;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 496px) {
		.text-blocks {
			flex-direction: column;
		}
		.positions {
			.base-collapse::v-deep {
				.description {
					padding-left: 30px !important;
				}
			}
		}
	}
}

.button {
	margin-right: 30px;
}
.description {
	padding: 0 29px;
	.subheader {
		font-family: "Harabara";
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 38px;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: #194484;
		margin: 0;
	}
	.list {
		list-style: none;
		.li {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 26px;
			color: #242424;
			padding-left: 3px;
		}
		li::before {
			content: "•";
			color: #194484;
			display: inline-block;
			width: 20px;
			margin-left: -1em;
			vertical-align: text-bottom;
			font-size: 40px;
		}
	}
}
</style>
