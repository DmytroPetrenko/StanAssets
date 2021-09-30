<template>
	<div id="author">
		<the-navigation light />
		<base-breadcrumbs
			:page="{ parentText: 'Team', text: authorFullName }"
			class="mlr-120 plrm-30"
		/>
		<div class="author-info plrm-30">
			<author-name-and-social
				:authorFullName="authorFullName"
				class="name-social mobile-disable"
			/>
			<p class="name mobile-enable">{{ authorFullName }}</p>

			<hr class="mobile-disable" />
			<div class="author-meta">
				<p class="author-position">{{ author.position }}</p>
				<div class="social-icons mobile-enable">
					<font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
					<font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
				</div>
			</div>
			<hr class="pc-disable mobile-enable" />

			<div class="photoText">
				<img :src="require(`@/assets/${author.image}`)" class="author-image" />
				<p
					v-for="(p, index) in author.biography"
					:key="index"
					class="author-biography"
				>
					{{ p }}
				</p>
			</div>
		</div>
		<the-advertisement-section />
		<the-recent-articles-section :authorId="author.id" />
		<footer-section />
	</div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation"
import AuthorNameAndSocial from "@/components/Other/AuthorNameAndSocial"
import TheAdvertisementSection from "@/components/TheAdvertisementSection"
import TheRecentArticlesSection from "@/components/Other/TheRecentArticlesSection"

import { mapGetters } from "vuex"
import FooterSection from "@/components/FooterSection.vue"
export default {
	components: {
		TheNavigation,
		AuthorNameAndSocial,
		FooterSection,
		TheAdvertisementSection,
		TheRecentArticlesSection,
	},
	computed: {
		...mapGetters("authors", ["getAuthorById"]),
		author() {
			return this.getAuthorById(this.$route.params.id)
		},
		authorFullName() {
			return this.author.name + " " + this.author.surname
		},
	},
}
</script>
<style lang="scss" scoped>
#author {
	.author-info {
		margin: 20px 240px;
		.name-social::v-deep {
			.name {
				font-family: "Harabara";
				font-style: normal;
				font-weight: bold;
				font-size: 44px;
				line-height: 60px;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: #194484;
			}
		}
		.name {
			display: none;
			font-family: "Harabara";
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 38px;
			text-align: center;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			color: #194484;
		}
		hr {
			border: 1px solid rgba(0, 0, 0, 0.2);
		}
		.author-meta {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.author-position {
				font-family: "Harabara";
				font-style: normal;
				font-weight: bold;
				font-size: 24px;
				line-height: 38px;
				letter-spacing: 0.05em;
				text-transform: uppercase;
				color: #242424;
				margin: 5px 0;
			}
			.social-icons {
				display: none;
				color: #b1b1b1;
				.icon {
					font-size: 24px;
					padding: 0 6px;
				}
			}
		}

		.photoText {
			.author-image {
				float: left;
				padding: 0 25px 15px 0;
			}
			.author-biography {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 26px;
				color: #242424;
			}
		}
	}

	@media screen and (max-width: 496px) {
		.author-info {
			margin: 0;
		}
		.photoText {
			.author-image {
				float: none !important;
				padding: 25px !important;
				width: 100%;
				box-sizing: border-box;
				border-radius: 16px;
			}
			.author-biography {
				font-size: 16px;
				line-height: 26px;
			}
		}
	}
}
</style>
