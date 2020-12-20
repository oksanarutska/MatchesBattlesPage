<template>
  <nuxt-link to="/" class="button-bl" :class="{ accent }">
    <p class="button1">{{ data.text }}</p>
    <svg class="icon" :class="data.icon">
      <use :xlink:href="`#${data.icon}`"></use>
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    accent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.button-bl {
  position: relative;
  min-width: vw(317px);
  min-height: vw(60px);
  padding: vw(20px) vw(26px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: $cl-white;
  border: 1px solid $cl-red;
  cursor: pointer;
  &.accent {
    background-color: $cl-red;
  }
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: vw(26px);
  }
}
</style>
