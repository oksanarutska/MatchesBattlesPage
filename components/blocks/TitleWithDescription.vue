<template>
  <div class="title-with-description">
    <h3 class="h3">
      {{ data.title }}
    </h3>
    <p class="p2 description" v-html="data.description"></p>
  </div>
</template>

<script>
export default {
  name: "TitleWithDescription",

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.title-with-description {
  max-width: vw(782px);
  margin-bottom: vw(25px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include max(md) {
    max-width: 100%;
    margin-bottom: 25px;
  }

  .h3 {
    margin-bottom: vw(20px);
    @include max(md) {
      margin-bottom: 8px;
    }
  }
  .description {
    color: $cl-grey-dr;
  }
}
</style>
