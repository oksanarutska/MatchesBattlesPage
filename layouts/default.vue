<template>
  <div>
    <Header />
    <main class="main">
      <Nuxt />
    </main>
    <SvgSprite />
  </div>
</template>
<script>
import Header from "~/components/common/Header";
import SvgSprite from "~/components/common/SvgSprite";

export default {
  components: {
    Header,
    SvgSprite
  },

};
</script>

<style>
</style>
