<template>
	<div class="contact-section plrm-30">
		<div class="row">
			<div class="column">
				<base-subheader class="header">Contact us</base-subheader>
				<p class="text">
					We are open for dialog and you are welcome to share your opinions or
					thoughts with us
				</p>
			</div>
			<div class="column">
				<base-contact-form class="form">
					<template>
						<fieldset class="fieldset">
							<p class="form-text">
								Hit us up any time through email with any idea and help us turn
								your great ideas into brilliant projects
							</p>
						</fieldset>
					</template>
				</base-contact-form>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<contact-section-text-block-item
					v-for="contactItem in contactsLeft"
					:key="contactItem.id"
					:icon="contactItem.icon"
					:text="contactItem.text"
				/>
			</div>
			<div class="column">
				<contact-section-text-block-item
					v-for="contactItem in contactsRight"
					:key="contactItem.id"
					:icon="contactItem.icon"
					:text="contactItem.text"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import ContactSectionTextBlockItem from "@/components/ContactSectionTextBlockItem"
export default {
	components: {
		ContactSectionTextBlockItem,
	},
	data() {
		return {
			contactsLeft: [
				{
					id: 1,
					text: "Ukraine, Kyiv Office 188",
					icon: ["fas", "map-marker-alt"],
				},
				{ id: 2, text: "+38 (093) 234 23 45", icon: ["fas", "phone"] },
				{ id: 3, text: "+38 (093) 934 76 45", icon: ["fas", "phone-square"] },
			],
			contactsRight: [
				{ id: 4, text: "Stanassets", icon: ["fab", "skype"] },
				{ id: 5, text: "stanassets@gmail.com", icon: ["fas", "envelope"] },
				{ id: 6, text: "facebook.com/Stanassets", icon: ["fab", "facebook"] },
			],
		}
	},
}
</script>
<style lang="scss" scoped>
.form-text {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	text-align: center;
	color: #242424;
	margin-left: 3px;
	margin-right: 3px;
}
.contact-section {
	display: flex;
	flex-direction: column;
	.row {
		display: flex;
		margin-bottom: 60px;
		.column {
			flex: 1 1 0;
			display: flex;
			flex-direction: column;
			.header::v-deep {
				text-align: left;
				margin-top: 100px;
				margin-bottom: 0;
			}
			.text {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: 600;
				font-size: 24px;
				line-height: 34px;
				color: #242424;
			}
			.form {
				width: 70%;
				margin: auto;
			}
		}
	}

	@media screen and (max-width: 496px) {
		.row {
			flex-direction: column;
			.column {
				.header::v-deep {
					text-align: center;
					margin-top: 40px;
				}
				.text {
					font-size: 18px;
					line-height: 34px;
					text-align: center;
				}
				.form {
					width: 100%;
					box-sizing: border-box;
				}
			}
		}
	}
}
</style>
