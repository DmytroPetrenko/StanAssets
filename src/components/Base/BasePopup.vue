<template>
	<div :class="{ close: !isPopupOpen }" class="popup">
		<font-awesome-icon
			:icon="['fas', 'times']"
			class="icon"
			@click="changePopupStatus"
		/>
		<slot/>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isPopupOpen: false,
		}
	},
	methods: {
		changePopupStatus() {
			this.isPopupOpen = !this.isPopupOpen
		},
	},
}
</script>
<style lang="scss" scoped>
.popup {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(36, 36, 36, 0.5);
	.icon {
		padding: 25px;
		position: absolute;
		right: 15px;
		top: 15px;
		font-size: 30px;
		cursor: pointer;
		color: #242424;
	}
}
.close {
	display: none;
}
</style>
