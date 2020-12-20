<template>
  <div class="header__logo">
    <nuxt-link to="#">
    <svg class="logo-icon">
      <use xlink:href="#logo-icon"></use>
    </svg>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: "Logo",
};
</script>

<style lang="scss">
.header__logo {
  width: vw(80px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #1e2024 0%, #25272e 100%);
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.14),
    inset 0px 3px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>
