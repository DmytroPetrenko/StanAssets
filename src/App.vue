<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;

	.pc-disable {
		display: none;
	}

	.mr-24 {
		margin-right: 24px;
		@media screen and (max-width: 496px) {
			margin-right: 0;
		}
	}
	.pb-16 {
		padding-bottom: 16px;
		@media screen and (max-width: 496px) {
			padding-bottom: 0;
		}
	}
	.mt-44 {
		margin-top: 44px !important;
		@media screen and (max-width: 496px) {
			margin-top: 0;
		}
	}
	.mlr-120 {
		margin-left: 120px !important;
		margin-right: 120px !important;
		@media screen and (max-width: 496px) {
			margin-left: 0 !important;
			margin-right: 0 !important;
		}
	}
	.mlr-80 {
		margin-left: 80px !important;
		margin-right: 80px !important;
		@media screen and (max-width: 496px) {
			margin-left: 0 !important;
			margin-right: 0 !important;
		}
	}
	.mlr-5 {
		margin-left: 5px !important;
		margin-right: 5px !important;
	}
	.plr-5 {
		padding-left: 5px !important;
		padding-right: 5px !important;
	}
	.plrm-30 {
		@media screen and (max-width: 496px) {
			padding-left: 30px !important;
			padding-right: 30px !important;
		}
	}
	.mtb-85 {
		margin-top: 85px !important;
		margin-bottom: 85px !important;
		@media screen and (max-width: 496px) {
			margin-top: 0 !important;
			margin-bottom: 0 !important;
		}
	}
	.mtb-40 {
		margin-top: 40px !important;
		margin-bottom: 40px !important;
	}
	@media screen and (max-width: 496px) {
		.mobile-disable {
			display: none !important;
		}
		.mobile-enable {
			display: block !important;
		}
	}
}
@font-face {
	font-family: "Montserrat";
	src: url("assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: "Harabara";
	src: url("assets/fonts/Harabara/Harabara.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: "Open Sans";
	src: url("assets/fonts/Open_Sans/OpenSans-Regular.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}
</style>
