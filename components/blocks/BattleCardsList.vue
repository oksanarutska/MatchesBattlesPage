<template>
  <div class="battle-cards-list">
    <BattleCard :card="card" v-for="card in cards" :key="card.id" />
  </div>
</template>

<script>
import BattleCard from "~/components/blocks/BattleCard";

export default {
  name: "BattleCardsList",
  components: {
    BattleCard,
  },
  data() {
    return {};
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.battle-cards-list {
  display: grid;
  grid-column-gap: vw(35px);
  grid-auto-flow: column;
  margin-bottom: vw(90px);
  @include max(md) {
    grid-column-gap: unset;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
