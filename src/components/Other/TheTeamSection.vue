<template>
	<div class="team">
		<base-subheader>Core team</base-subheader>
		<base-links />
		<div class="cards mlr-120 plrm-30">
			<base-card
				v-for="author in authors"
				:key="author.id"
				:image="author.image"
				:header="author.name"
				:text="author.description"
				@click.native="goToAuthorPage(author.id)"
				class="card"
			/>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex"
import routeNames from "@/router/routeNames"
export default {
	computed: {
		...mapState("authors", ["authors"]),
	},
	methods: {
		goToAuthorPage(id) {
			this.$router.push({ name: routeNames.author, params: { id } })
		},
	},
}
</script>
<style lang="scss" scoped>
.cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.card::v-deep {
		box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
		background: #ffffff;
		align-items: flex-start;
		border-radius: 16px;
		max-width: 28%;
		.image-wrapper {
			width: 100%;
			.image {
				width: 100%;
				height: auto;
			}
		}
		.h3,
		.p {
			padding: 0 20px;
			text-align: left;
		}
		.h3 {
			margin-top: 12px;
		}
	}

	@media screen and (max-width: 496px) {
		.card::v-deep {
			max-width: 100%;
			height: auto !important;
		}
	}
}
</style>
