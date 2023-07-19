<template>
  <v-app dark>
    <v-main>
      <AppHeader />
      <div class="app-container">
        <Nuxt />
      </div>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {
    AppHeader: () => import("~/components/layout/app-header.vue"),
    AppFooter: () => import("~/components/layout/app-footer.vue"),
  },
  data() {
    return {};
  },
};
</script>
