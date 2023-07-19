<template>
  <div class="home-page"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { routes } from "~/routes";

export default Vue.extend({
  name: "IndexPage",
  mounted() {
    this.$router.push(routes.blog);
  },
});
</script>