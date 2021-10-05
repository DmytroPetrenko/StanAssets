<template>
	<div class="clutch-review">
		<img :src="require('@/assets/clutch.png')" class="img-clutch" />
		<div class="ratio">
			<p class="text">4,5</p>
			<img :src="require('@/assets/clutch_stars.png')" class="img-stars" />
			<p class="text">2 reviews</p>
		</div>
		<base-button background-color="#06B25F">Check out reviews</base-button>
	</div>
</template>
<style lang="scss" scoped>
.clutch-review {
	min-height: 200px;
	background: #ffffff;
	box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
	border-radius: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 33px;
	box-sizing: border-box;
	margin: auto;

	.img-clutch {
		width: 132px;
	}
	.ratio {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 26px;
		color: #242424;
		.img-stars {
			padding: 0 10px;
		}
		.text {
			white-space: nowrap;
		}
	}

	@media screen and (max-width: 496px) {
		width: auto;
		max-width: 100%;
		flex-direction: column;
		margin: 0 30px;
	}
}
</style>
