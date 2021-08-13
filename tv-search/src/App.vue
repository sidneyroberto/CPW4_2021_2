<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";

export default {
  components: { Header },
};
</script>

<style lang="scss">
@import "globals";
body {
  margin: 0;
  font-family: "main";
}
</style>
