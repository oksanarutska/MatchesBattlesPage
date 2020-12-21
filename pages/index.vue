<template>
  <div class="main">
    <WelcomScreen />
    <div class="container">
      <TourneyBlock :tourney="demo.home.tourneyBlock" />
      <TitleWithDescription :data="demo.home.stages" />
      <div class="registration-wrapper">
        <ListOfParticipants :list="demo.home.listOfParticipants" />
        <MenuExtraInfo
          :infoPopupRegistration="demo.home.infoPopupRegistration"
          :menuPage="demo.home.menuPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WelcomScreen from "~/components/blocks/WelcomScreen";
import TourneyBlock from "~/components/blocks/TourneyBlock";
import TitleWithDescription from "~/components/blocks/TitleWithDescription";
import ListOfParticipants from "~/components/blocks/ListOfParticipants";
import MenuExtraInfo from "~/components/blocks/MenuExtraInfo";

export default {
  components: {
    WelcomScreen,
    TourneyBlock,
    TitleWithDescription,
    ListOfParticipants,
    MenuExtraInfo,
  },
};
</script>

<style lang="scss" scoped>
.registration-wrapper {
  display: flex;
  align-items: flex-start;
  @include max(md) {
    flex-direction: column;
  }
}
.list-of-participants {
  @include max(md) {
    order: 1;
  }
}
.container {
  padding-bottom: vw(140px);
  @include max(md) {
    padding-bottom: 90px;
  }
  @include max(sm) {
    padding-bottom: 60px;
  }
}
</style>
