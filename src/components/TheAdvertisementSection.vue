<template>
	<div id="advertisement">
		<h1 class="header">looking for a partner in building a solution?</h1>
		<p class="text">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.
		</p>
		<base-button
			backgroundColor="white"
			border="2px solid #06B25F"
			color="#06B25F"
			>
			let`s talk
			</base-button
		>
	</div>
</template>
<style lang="scss" scoped>
#advertisement {
	background: url("~@/assets/advertisement_bg.png");
	background-size: cover;
	height: 640px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.header {
		font-family: "Harabara";
		font-style: normal;
		font-weight: bold;
		font-size: 44px;
		line-height: 60px;
		letter-spacing: 0.06em;
		text-transform: uppercase;

		color: #ffffff;
	}
	.text {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 29px;

		color: #ffffff;
	}
	@media screen and (max-width: 496px) {
		text-align: center;
		padding: 0 5px;
		height: 380px;
		.header {
			margin: 0;
			font-size: 24px;
			line-height: 38px;
		}
		.text {
			margin: 5px 0;
			font-size: 16px;
			line-height: 20px;
		}
	}
}
</style>
