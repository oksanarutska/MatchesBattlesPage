<template>
  <ul class="menu-pages">
    <li class="menu-item" v-for="item in data" :key="item.id">
      <nuxt-link class="caption accent link" :to="item.link">{{
        item.page
      }}</nuxt-link>
      <svg class="arrow-simple">
        <use xlink:href="#arrow-simple"></use>
      </svg>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuPages",

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-pages {
  width: 100%;
  .menu-item {
    width: 100%;
    height: vw(60px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid rgba(54, 56, 65, 0.1);
    @include max(md){
      height: 60px;
    }
    &:last-child {
      border-bottom: 1px solid rgba(54, 56, 65, 0.1);
    }
    &:hover{
       .arrow-simple{
         transform: translateX(3px);  
       } 
    }
    .link {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      color: $cl-grey-dr;
    }
    .arrow-simple {
      position: absolute;
      right: vw(10px);
      transition: transform 0.3s ease-in-out;
      color: $cl-red;
    }
  }
}
</style>
