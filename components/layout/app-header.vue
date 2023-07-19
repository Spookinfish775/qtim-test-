<template>
  <div class="app-header-wrapper">
    <div class="app-logo-wrapper">
      <img class="app-logo" src="~/static/images/logo.png" alt="appLogo" />
    </div>
    <div class="app-header">
      <nuxt-link
        v-for="link in navigation"
        :key="link.id"
        :to="link.to"
        class="app-header-link"
      >
        {{ link.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { navigation } from "~/infrastructure/navigation/appNavigation";

export default Vue.extend({
  name: "AppHeader",
  computed: {
    navigation() {
      return navigation(this);
    },
  },
});
</script>

<style lang="scss" scoped>
.app-header-wrapper {
  width: 100%;
  max-width: 1000px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: $whiteColor;
  padding: 12px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .app-logo-wrapper {
    .app-logo {
      width: 200px;
    }
  }
  .app-header {
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    border-top: 1px solid $lightGrayColor;
    border-bottom: 1px solid $lightGrayColor;
    .app-header-link {
      text-transform: uppercase;
      font-size: 14px;
      color: $blackColor;
      font-weight: 700;
      line-height: 1.8s;
      transition: 0.3s;
      &:hover {
        color: $lightGrayColor;
      }
    }
  }
}
</style>