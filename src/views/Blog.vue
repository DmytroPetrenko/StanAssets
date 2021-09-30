<template>
  <services-technologies :section="routeNames.blog" blog />
</template>
<script>
import routeNames from "@/router/routeNames.js";
import ServicesTechnologies from "@/components/Other/ServicesTechnologies";
export default {
  components: { ServicesTechnologies },
  computed: {
    routeNames() {
      return routeNames;
    },
  },
};
</script>
