<template>
  <header class="header">
    <Logo />
  </header>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  height: vw(80px);
  padding: 0 vw(60px);
  display: flex;
  background-color: $cl-black-dr;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12),
    0px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
</style>
