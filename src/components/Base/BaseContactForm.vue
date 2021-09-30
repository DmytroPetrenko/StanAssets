<template>
	<form class="form" id="contactForm" autocomplete="off" novalidate>
		<slot/>
		<fieldset class="fieldset">
			<input placeholder="Name" type="text" class="input-text" />
		</fieldset>
		<fieldset class="fieldset">
			<input placeholder="Email" type="text" class="input-text" />
		</fieldset>
		<fieldset class="fieldset">
			<textarea
				name="message"
				rows="2"
				form="contactForm"
				placeholder="Message"
				class="input-text textarea"
			/>
		</fieldset>
		<fieldset class="fieldset">
			<base-button
				backgroundColor="#2DA531"
				width="100%"
				style="margin: 20px 10px"
				>Send request</base-button
			>
		</fieldset>
	</form>
</template>
<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	background: #ffffff;
	box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
	border-radius: 6px;
	padding: 40px 30px 30px 30px;
	width: 100%;
	.fieldset {
		display: flex;
		border: none;
		padding: 0;
		position: relative;
		clear: both;
		margin: 0;
		.textarea {
			height: 80px !important;
			margin: 10px;
		}
		.textarea::placeholder {
			padding-top: 5px;
			font-family: "Open Sans";
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 19px;
			color: #a9a9a9;
		}
		.input-text {
			flex: 1;
			background: #ffffff;
			border: 1px solid #d7d7d7;
			box-sizing: border-box;
			border-radius: 4px;
			height: 40px;
			margin: 10px;
		}
		.input-text::placeholder {
			padding-left: 15px;
			font-family: "Open Sans";
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 19px;
			color: #a9a9a9;
		}
	}
}
</style>
