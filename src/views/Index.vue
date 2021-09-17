<template>
	<div class="index">
		<the-home-section />
		<the-technologies-section />
		<the-services-section />
		<the-advertisement-section />
		<the-achivments-section />
		<the-partners-section />
		<the-contacts-section />
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
<style lang="scss" scoped></style>
