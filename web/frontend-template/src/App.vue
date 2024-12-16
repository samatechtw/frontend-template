<template>
  <AppHeader />
  <div id="scroll-container" class="app-content">
    <router-view class="app-router-view" />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { AppHeader, AppFooter } from '@frontend/components/nav'
</script>

<style lang="postcss">
@import '@theme/css/font.postcss';
@import '@theme/css/defines.postcss';
@import '@theme/css/app.postcss';

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: black;
  background: $color5;
  * {
    box-sizing: border-box;
  }
}
body {
  background: $color1;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
</style>
