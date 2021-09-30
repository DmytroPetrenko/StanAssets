<template>
	<h2 class="subheader"><slot /></h2>
</template>
<style lang="scss" scoped>
.subheader {
	font-family: "Harabara";
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 39px;
	text-align: center;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: #194484;
	@media screen and (max-width: 496px) {
		font-size: 22px;
		line-height: 24px;
	}
}
</style>
