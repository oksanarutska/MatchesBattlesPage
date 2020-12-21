<template>
  <div class="list-of-participants">
    <p class="p2 accent title">Зарегистрировано: {{ list.length }}</p>
    <div class="list-of-participants__header">
      <p class="caption number">#</p>
      <p class="caption">Команда</p>
    </div>
    <div class="list">
      <ItemParticipant :data="item" v-for="item in list" :key="item.id" />
    </div>
  </div>
</template>

<script>
import ItemParticipant from "~/components/blocks/ItemParticipant";

export default {
  name: "ListOfParticipants",

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ItemParticipant,
  },
};
</script>

<style lang="scss" scoped>
.list-of-participants {
  width: vw(950px);
  margin-right: vw(35px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include max(md) {
    width: 100%;
    margin-right: 0;
  }
  .title {
    margin-bottom: vw(30px);
    @include max(md) {
      margin-bottom: 20px;
    }
  }
  &__header {
    width: 100%;
    padding: 0 vw(35px);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    @include max(md) {
      padding: 0 25px;
    }

    .number {
      width: vw(60px);
      @include max(md) {
        width: 40px;
      }
    }
    .caption {
      letter-spacing: 0.02em;
      color: $cl-grey-dr;
    }
  }
  .list {
    width: 100%;
    .item-participant {
      &:nth-child(odd) {
        background-color: $cl-white;
      }
    }
  }
}
</style>
