<template>
  <div id="header">
    <img :src="logo" alt="Logo do TV Search" />
    <router-link to="/">
      <span>TV Search</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import logo from "../assets/img/logo64.png";

export default {
  data: () => {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../globals";

#header {
  background-color: $background-color;
  padding: 20px 10px;

  * {
    vertical-align: middle;
  }

  span {
    margin-left: 20px;
    color: white;
    font-family: "secondary";
    font-size: 300%;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: #59abe3;
    }
  }
}
</style>