<template>
	<div class="mlr-120">
		<base-subheader>Recent Projects</base-subheader>
		<base-cards-slider :cards="all"/>
	</div>
</template>
<script>
import { mapState } from "vuex"
export default {
	computed: {
		...mapState("projects", ["all"]),
	},
}
</script>
