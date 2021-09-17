<template>
	<div id="technologies">
		<div class="content-wrapper">
			<base-subheader>technologies</base-subheader>
			<p class="technologies-text">
				<span style="color: #00a4e8">Stan`s</span>&nbsp;
				<span style="color: #194484">Assets</span> Lorem ipsum dolor sit amet
				consectetur adipisicing elit. In minus quo mollitia aperiam fuga cumque
				ea odit dolores maiores autem?
			</p>
			<div class="technologies-icons">
				<div
					v-for="(icon, index) in technologiesIcons"
					:key="index"
					class="technologies-icon-wrapper"
					:style="`backgroundColor: ${icon.backgroundColor}`"
				>
					<font-awesome-icon :icon="icon.link" class="technologies-icon" />
				</div>
			</div>
			<p class="technologies-text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
				consectetur?
			</p>
			<clutch-review />
		</div>
	</div>
</template>
<script>
import ClutchReview from "@/components/ClutchReview"
export default {
	components: { ClutchReview },
	data() {
		return {
			technologiesIcons: [
				{ link: ["fab", "android"], backgroundColor: "#06B25F" },
				{ link: ["fab", "apple"], backgroundColor: "#276ED8" },
				{ link: ["fab", "unity"], backgroundColor: "#84B5FF" },
			],
		}
	},
}
</script>
<style lang="scss" scoped>
#technologies {
	display: flex;
	flex-direction: column;
	align-items: center;
	.content-wrapper {
		max-width: 60%;
		.technologies-text {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: normal;
			font-size: 24px;
			line-height: 38px;
			color: #242424;
			text-align: center;
		}
		.technologies-icons {
			display: flex;
			justify-content: center;
			.technologies-icon-wrapper {
				width: 64px;
				height: 64px;
				border-radius: 16px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 30px 40px;
				.technologies-icon {
					color: white;
					font-size: 40px;
				}
			}
		}
	}
}
</style>
