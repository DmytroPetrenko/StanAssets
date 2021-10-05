<template>
	<base-popup ref="basePopup">
		<template>
			<form class="form" id="contactForm" autocomplete="off" novalidate>
				<div class="header">Join the team</div>
				<p class="text">{{ position }}</p>
				<fieldset class="fieldset">
					<input placeholder="Full Name" type="text" class="input-text" />
				</fieldset>
				<fieldset class="fieldset">
					<input placeholder="Email" type="text" class="input-text" />
				</fieldset>
				<fieldset class="fieldset">
					<input placeholder="Portfolio link" type="text" class="input-text" />
				</fieldset>
				<fieldset class="fieldset">
					<input
						placeholder="Please Attach your CV File..."
						type="file"
						ref="file"
						class="input-text"
						v-on:change="handleFileUpload"
					/>
					<input
						placeholder="Please Attach your CV File..."
						type="text"
						class="input-text"
						:value="file.name"
					/>
					<base-button class="button" @click.native="selectFile"
						>Select file</base-button
					>
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
						style="margin: 20px"
						@click.native.prevent="changePopupStatus"
						>
						Submit
						</base-button
					>
				</fieldset>
			</form>
		</template>
	</base-popup>
</template>
<script>
export default {
	data() {
		return {
			position: "position",
			file: "",
		}
	},
	methods: {
		openPopup(position) {
			this.position = position
			this.changePopupStatus()
		},
		changePopupStatus() {
			this.file = ""
			this.$refs.basePopup.changePopupStatus()
		},
		handleFileUpload() {
			this.file = this.$refs.file.files[0]
		},
		selectFile() {
			this.$refs.file.click()
		},
	},
}
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	border-radius: 6px;
	background-color: white;
	width: 33%;
	position: absolute;
	top: 15%;
	left: 33%;
	padding: 20px;
	.header {
		font-family: "Harabara";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 38px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #194484;
		text-align: center;
	}
	.text {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 38px;
		text-align: center;
		text-transform: capitalize;
		color: #242424;
		margin: 0;
	}
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
			margin: 5px 20px;
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
.button::v-deep {
	border: 2px solid #06b25f;
	color: #06b25f;
	height: 40px;
	margin: 5px 20px 5px 0;
	font-weight: bold;
}
input[type="file"] {
	position: absolute;
	top: -500px;
}
</style>
