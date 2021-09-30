<template>
	<div class="additional-information">
		<base-stars-rating :rating="post.rating" />
		<div class="read-time">
			<font-awesome-icon :icon="['fas', 'clock']" class="icon" />
			<p class="read-time-text">{{ readTime }} min read</p>
		</div>
		<div class="views">
			<font-awesome-icon :icon="['fas', 'eye']" class="icon" />
			<p class="views-text">{{ post.views }} views</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	computed: {
		readTime() {
			return Math.round(this.post.fullText.join("").length / 1000)
		},
	},
}
</script>
<style lang="scss" scoped>
.additional-information {
	display: flex;
	color: #b1b1b1;

	.read-time {
		display: flex;
		margin: 5px;
		.icon {
			padding: 0 5px;
		}
		.read-time-text {
			margin: 0;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			white-space: nowrap;
		}
	}
	.views {
		display: flex;
		margin: 5px;
		.icon {
			padding: 0 5px;
		}
		.views-text {
			margin: 0;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			white-space: nowrap;
		}
	}

	@media screen and (max-width: 496px) {
		justify-content: center;
		flex-wrap: wrap;
		padding: 0 5px;
	}
}
</style>
