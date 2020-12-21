<template>
  <div class="matche-cards-list">
    <MatcheCard :card="card" v-for="card in cards" :key="card.id" />
  </div>
</template>

<script>
import MatcheCard from "~/components/blocks/MatcheCard";

export default {
  name: "MatcheCardsList",
  data() {
    return {};
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    MatcheCard,
  },
};
</script>

<style lang="scss" scoped>
.matche-cards-list {
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
