<template>
	<div class="index">
		<the-home-section />
		<div class="mobile-enable home-text plrm-30">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam
			asperiores quibusdam itaque harum aut iure unde assumenda at minus?
			<br />A eveniet quis, ullam commodi ipsam itaque harum aperiam voluptates
			adipisci repellat atque dolor possimus dignissimos officiis beatae eum!
			Sequi!
		</div>
		<the-technologies-section class="plrm-30" />
		<the-services-section class="plrm-30" />
		<the-advertisement-section class="plrm-30" />
		<the-achivments-section class="plrm-30" />
		<the-partners-section class="plrm-30" />
		<the-contacts-section class="plrm-30" />
		<footer-section />
	</div>
</template>

<script>
import TheHomeSection from "@/components/Index/TheHomeSection.vue"
import TheTechnologiesSection from "@/components/Index/TheTechnologiesSection.vue"
import TheServicesSection from "@/components/Index/TheServicesSection.vue"
import TheAdvertisementSection from "@/components/TheAdvertisementSection.vue"
import TheAchivmentsSection from "@/components/Index/TheAchivmentsSection.vue"
import ThePartnersSection from "@/components/Index/ThePartnersSection.vue"
import TheContactsSection from "@/components/TheContactsSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
	name: "Index",
	components: {
		TheHomeSection,
		TheTechnologiesSection,
		TheServicesSection,
		TheAdvertisementSection,
		TheAchivmentsSection,
		ThePartnersSection,
		TheContactsSection,
		FooterSection,
	},
}
</script>
<style lang="scss" scoped>
.home-text {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	text-align: center;
	color: #242424;
	padding: 0 5px;
}
</style>
