<template>
  <nuxt-link to="/" class="item-participant">
    <p class="p2 accent item-participant__number">{{ data.id }}</p>
    <div class="item-participant__info">
      <img :src="data.flag" alt="icon flag" />
      <p class="p2 accent">{{ data.name }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "ItemParticipant",

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.item-participant {
  width: 100%;
  height: vw(59px);
  padding: 0 vw(25px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px transparent;
  transition: box-shadow 0.3s ease-in-out;
  &:hover{
      box-shadow: inset 0 0 0 1px $cl-green;
  }
  &__number {
    width: vw(70px);
  }
  &__info {
    display: flex;
    align-items: center;
    img {
      width: vw(18px);
      height: vw(24px);
      margin-right: vw(10px);
    }
  }
}
</style>
