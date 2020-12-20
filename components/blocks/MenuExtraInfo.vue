<template>
  <div class="menu-extra-info">
      <RegistrationBlock/>
      <RegistrationInfoPopup/>
  
  </div>
</template>

<script>
import RegistrationBlock from "~/components/blocks/RegistrationBlock";
import RegistrationInfoPopup from "~/components/blocks/RegistrationInfoPopup";

export default {
  name: "MenuExtraInfo",
  components:{
      RegistrationBlock,
      RegistrationInfoPopup
  }

};
</script>

<style lang="scss" scoped>
.menu-extra-info{
    max-width: vw(456px);
    .registration-block{
        margin-bottom: vw(40px);
    }
}
</style>
