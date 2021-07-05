<template>
  <div class="app-container">
    <pageLoading v-if="showLoading" />
    <CenterLayout width="800px">
      <PersonalInfo />
    </CenterLayout>
  </div>
</template>

<script setup>
import { ref } from "vue";

import PersonalInfo from "./modules/personal-info";
import CenterLayout from "./componnts/layout/CenterLayout";
import { loadingTheme1 as pageLoading } from "./componnts/loading";

const showLoading = ref(true);
window.onload = function () {
  showLoading.value = false;
};
</script>

<style lang="scss">
@import "./index.scss";
</style>