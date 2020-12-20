<template>
  <nuxt-link v-if="condition" v-bind="nuxtLinkProps">
    <slot />
  </nuxt-link>
  <component v-else :is="component" v-bind="componentProps">
    <slot />
  </component>
</template>

<script>
export default {
  props: ["condition", "nuxtLinkProps", "component", "componentProps"],
};
</script>

<style>
</style>