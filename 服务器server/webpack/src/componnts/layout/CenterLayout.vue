<template>
  <div class="center-layout" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
interface styles {
  width: string;
}

export default {
  props: ["width"],
  computed: {
    style(): styles {
      return { width: this.width };
    },
  },
};
</script>

<style scoped>
.center-layout {
  margin: auto;
}
</style>