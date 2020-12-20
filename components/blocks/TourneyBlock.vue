<template>
  <div class="tourney-block ">
    <h3 class="h3">{{ tourney.title }}</h3>
    <div class="tourney-block__buttons">
      <button class="button p2 accent select">
        {{ tourney.matches.name }}
      </button>
      <button class="button p2 accent">
        {{  tourney.battles.name }}
      </button>
    </div>
    <MatcheCardsList :cards="tourney.matches.tourney" />
  </div>
</template>

<script>
import MatcheCardsList from "~/components/blocks/MatcheCardsList";

export default {
  name: "TourneyBlock",
  data() {
    return {};
  },
  props: {
    tourney: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MatcheCardsList,
  },
};
</script>

<style lang="scss" scoped>
.tourney-block {
  padding-top: vw(90px) ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .h3 {
    margin-bottom: vw(40px);
  }
  .tourney-block__buttons {
    width: 100%;
    margin-bottom: vw(60px);
    position: relative;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: $cl-red;
    }
    .button {
      padding: vw(15px) vw(40px);
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: rgba($cl-grey-dr, 0.1);
      }
      &.select {
        background-color: $cl-red;
        color: $cl-white;
        &:hover {
          background-color: $cl-red;
        }
      }
    }
  }
}
</style>
