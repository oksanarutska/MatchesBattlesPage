<template>
  <div class="registration-info-popup"></div>
</template>

<script>
import RegistrationBlock from "~/components/blocks/RegistrationBlock";

export default {
  name: "RegistrationInfoPopup",
  components: {
    RegistrationBlock,
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
  }
}
</style>
