<template>
  <div class="registration-info-popup">
    <div class="info">
      <p class="button1">{{ data.title }}</p>
      <p class="caption">Team: {{ data.team }}</p>
    </div>
    <svg class="check">
      <use xlink:href="#check"></use>
    </svg>
  </div>
</template>

<script>
import RegistrationBlock from "~/components/blocks/RegistrationBlock";

export default {
  name: "RegistrationInfoPopup",
  components: {
    RegistrationBlock,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-info-popup {
  width: vw(456px);
  height: vw(60px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $cl-green;
  @include max(md) {
    width: 100%;
    height: 50px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: vw(375px);
    clip-path: polygon(100% 0, 0 0, 0 100%);
    display: flex;
    background-color: rgba($cl-white, 0.2);
    @include max(md) {
      width: 80%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $cl-white;
  }
  .check {
    position: absolute;
    left: vw(20px);
    top: 50%;
    transform: translateY(-50%);
    @include max(md) {
      left: 20px;
    }
  }
}
</style>
