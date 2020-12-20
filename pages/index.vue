<template>
  <div class="main">
    <WelcomScreen />
    <div class="container">
      <TourneyBlock :tourney="demo.home.tourneyBlock" />
      <TitleWithDescription :data="demo.home.stages" />
      <div class="registration-wrapper">
        <ListOfParticipants :list="demo.home.listOfParticipants" />
        <MenuExtraInfo />
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
.registration-wrapper{
  display: flex;
  align-items: flex-start;
}
</style>
