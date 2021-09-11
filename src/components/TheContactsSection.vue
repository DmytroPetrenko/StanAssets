<template>
	<div id="contacts">
		<base-subheader>contacts</base-subheader>
		<h6 class="h6">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta!
		</h6>
		<p class="p">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, mollitia!
		</p>
		<div class="contact-block">
			<div class="contact-block-text">
				<contact-section-text-block-item
					v-for="contactItem in contacts"
					:key="contactItem.id"
					:icon="contactItem.icon"
					:text="contactItem.text"
				/>
			</div>
			<div class="contact-block-form">
				<base-contact-form />
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
			contacts: [
				{
					id: 1,
					text: "Ukraine, Kyiv Office 188",
					icon: ["fas", "map-marker-alt"],
				},
				{ id: 2, text: "+38 (093) 234 23 45", icon: ["fas", "phone"] },
				{ id: 3, text: "+38 (093) 934 76 45", icon: ["fas", "phone-square"] },
				{ id: 4, text: "Stanassets", icon: ["fab", "skype"] },
				{ id: 5, text: "stanassets@gmail.com", icon: ["fas", "envelope"] },
				{ id: 6, text: "facebook.com/Stanassets", icon: ["fab", "facebook"] },
			],
		}
	},
}
</script>
<style lang="scss" scoped>
#contacts {
	padding: 0 235px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.h6 {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		text-align: center;
		color: #242424;
		margin: 0;
	}
	.p {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		color: #242424;
	}
	.contact-block {
		display: flex;
		.contact-block-text {
			flex: 1 1 0;
			margin-top: 50px;
		}
		.contact-block-form {
			flex: 1 1 0;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 50px 80px;
			background-image: url("~@/assets/contacts_bg1.png"),
				url("~@/assets/contacts_bg2.png"), url("~@/assets/contacts_bg3.png");
			background-repeat: no-repeat, no-repeat, no-repeat;
			background-position: top left, bottom left, top right;
		}
	}
}
</style>
