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
	.mr-24 {
		margin-right: 24px;
	}
	.pb-16 {
		padding-bottom: 16px;
	}
	.mt-44 {
		margin-top: 44px !important;
	}
	.mlr-120 {
		margin: 0 120px;
	}
	.mtb-85 {
		margin-top: 85px !important;
		margin-bottom: 85px !important;
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
