<template>
  <div class="app-footer-wrapper">
    <div class="app-logo-wrapper">
      <img class="app-logo" src="~/static/images/logoBlack.png" alt="appLogo" />
    </div>
    <h5 class="app-footer-description">© Test task for QTIM by Aleksandr V.</h5>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppFooter",
});
</script>

<style lang="scss" scoped>
.app-footer-wrapper {
  width: 100%;
  height: 145px;
  background-color: $footerColor;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  .app-logo-wrapper {
    .app-logo {
      width: 200px;
    }
  }
  .app-footer-description {
    color: $grayTextColor;
    font-weight: 400;
    letter-spacing: 2px;
  }
}
</style>