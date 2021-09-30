<template>
	<div class="text-block">
		<h3 class="h3">{{ header }}</h3>
		<p class="p">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius
			eaque inventore voluptas accusamus at laborum tempore numquam vero quasi,
			repudiandae nulla veniam. Maxime aspernatur nam neque inventore rerum, rem
			delectus possimus quibusdam omnis sint voluptatum? Quaerat, maiores
			deleniti eum, nesciunt cum eveniet cumque qui impedit beatae unde modi
			rem!
		</p>
	</div>
</template>
<script>
export default {
	props: {
		header: {
			type: String,
			default: "Header",
		},
	},
}
</script>
<style lang="scss" scoped>
.text-block {
	flex: 1 1 0;
	padding: 10px;
	.h3 {
		font-family: "Harabara";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 38px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #0d6eb7;
		margin: 0;
	}
	.p {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 26px;
		color: #242424;
		margin: 0;
	}
	@media screen and (max-width: 496px) {
		.h3 {
			font-size: 20px;
			line-height: 38px;
		}
		.p {
			font-size: 16px;
			line-height: 26px;
		}
	}
}
</style>
