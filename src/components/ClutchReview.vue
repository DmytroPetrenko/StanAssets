<template>
	<div class="clutch-review">
		<img :src="require('@/assets/clutch.png')" class="img-clutch" />
		<div class="ratio">
			4,5
			<img :src="require('@/assets/clutch_stars.png')" class="img-stars" /> 2
			reviews
		</div>
		<base-button background-color="#06B25F">Check out reviews</base-button>
	</div>
</template>
<style lang="scss" scoped>
.clutch-review {
	width: 900px;
	height: 200px;
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
	}
}
</style>
