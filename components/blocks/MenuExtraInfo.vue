<template>
  <div class="menu-extra-info">
    <RegistrationBlock :infoPopupRegistration="infoPopupRegistration" />
    <MenuPages :data="menuPage" />
  </div>
</template>

<script>
import RegistrationBlock from "~/components/blocks/RegistrationBlock";
import MenuPages from "~/components/blocks/MenuPages";

export default {
  name: "MenuExtraInfo",
  components: {
    RegistrationBlock,
    MenuPages,
  },
  props: {
    infoPopupRegistration: {
      type: Object,
      default: () => ({}),
    },
    menuPage: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-extra-info {
  width: vw(456px);
  margin-top: vw(90px);
  @include max(md) {
    width: 100%;
  }
  .registration-block {
    margin-bottom: vw(30px);
    @include max(md) {
      margin-bottom: 30px;
    }
  }
  .menu-pages {
    @include max(md) {
      margin-bottom: 40px;
    }
  }
}
</style>
