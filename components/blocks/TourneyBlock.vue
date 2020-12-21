<template>
  <div class="tourney-block">
    <h3 class="h3">{{ tourney.title }}</h3>
    <div class="tourney-block__buttons">
      <button
        @click="OpenMatches"
        class="button p2 accent"
        :class="{ selected: currentTypeTourney === 'Matches' }"
      >
        {{ tourney.matches.name }}
      </button>
      <button
        @click="OpenBattles"
        class="button p2 accent"
        :class="{ selected: currentTypeTourney === 'Battles' }"
      >
        {{ tourney.battles.name }}
      </button>
    </div>
    <MatcheCardsList
      v-if="currentTypeTourney === 'Matches'"
      :cards="tourney.matches.tourney"
    />
    <BattleCardsList
      v-if="currentTypeTourney === 'Battles'"
      :cards="tourney.battles.tourney"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MatcheCardsList from "~/components/blocks/MatcheCardsList";
import BattleCardsList from "~/components/blocks/BattleCardsList";

export default {
  name: "TourneyBlock",
  components: {
    MatcheCardsList,
    BattleCardsList,
  },
  computed: {
    ...mapState(["currentTypeTourney"]),
  },
  data() {
    return {};
  },
  props: {
    tourney: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    OpenMatches() {
      this.$store.commit("changeTypeTourney", "Matches");
    },
    OpenBattles() {
      this.$store.commit("changeTypeTourney", "Battles");
    },
  },
};
</script>

<style lang="scss" scoped>
.tourney-block {
  padding-top: vw(90px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include max(lg) {
    padding-top: 90px;
  }
  @include max(sm) {
    padding-top: 60px;
  }
  .h3 {
    margin-bottom: vw(40px);
    @include max(lg) {
      margin-bottom: 24px;
    }
  }
  .tourney-block__buttons {
    width: 100%;
    margin-bottom: vw(60px);
    position: relative;
    display: flex;
    align-items: center;
    @include max(md) {
      margin-bottom: 26px;
    }
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
      @include max(md){
        padding: 15px 40px;
      }
      &:hover {
        background-color: rgba($cl-grey-dr, 0.1);
      }
      &.selected {
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
