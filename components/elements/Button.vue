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
  transition: background-color 0.3s ease-in-out;
  @include max(md) {
    min-width: 230px;
    min-height: 40px;
    padding: 12px 45px 12px 18px;
  }
  @include max(sm) {
    min-width: unset;
    width: 100%;
    min-height: 40px;
    padding: 16px 45px 16px 18px;
  }
  &:hover {
    background-color: $cl-red;
  }
  &.accent {
    background-color: $cl-red;
    &:hover {
      background-color: transparent;
    }
  }
  .button1 {
    @include max(lg) {
      margin-bottom: -2px;
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: vw(26px);
    @include max(md) {
      right: 12px;
    }
  }
}
</style>
