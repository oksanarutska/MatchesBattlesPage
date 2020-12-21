<template>
  <NuxtLinkCondition
    :condition="card.status === 'Live'"
    :nuxtLinkProps="{
      to: '/',
      class: 'battle-card battle-card-link',
    }"
    :component="'div'"
    :componentProps="{
      class: 'battle-card',
    }"
  >
    <p class="caption battle-name">{{ card.name }}</p>
    <div v-if="card.status === 'Live'" class="battle-status battle-status_live">
      <div class="show-date_wrapper">
        <svg class="play">
          <use xlink:href="#play"></use>
        </svg>
        <p class="caption">{{ card.time }}</p>
      </div>
    </div>
    <div v-else class="battle-status">
      <div class="show-date_wrapper">
        <h5 class="h5 time">{{ time }}</h5>
        <span class="caption">{{ date }}</span>
      </div>
    </div>

    <div class="battle-container">
      <img class="disciplines" :src="card.disciplines" :alt="card.name" />
      <div class="groups_container">
        <div class="groups_wrapper">
          <h5 class="h5" v-for="item in card.groups" :key="item.id">
            {{ item }}
          </h5>
        </div>
        <p class="match caption accent">{{ card.match }}</p>
      </div>
      <div class="map_wrapper">
        <div v-if="card.status === 'Upcoming'">
          <span class="caption">Starts in: {{ timeRemaining }}</span>
          <span class="caption dot">•</span>
        </div>
        <p class="caption system">{{ card.map }}</p>
      </div>
    </div>
  </NuxtLinkCondition>
</template>

<script>
import NuxtLinkCondition from "../common/NuxtLinkCondition";
import moment from "moment";

export default {
  name: "BattleCard",
  components: {
    NuxtLinkCondition,
  },
  data() {
    return {
      timeRemaining: "",
      timer: 0,
    };
  },
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    time() {
      return moment(this.card.dateTime).format("HH:mm");
    },
    date() {
      return moment(this.card.dateTime).format("DD MMMM");
    },
  },
  mounted() {
    if (!this.card) {
      return;
    }
    this.timer = setInterval(() => {
      const timeToBattle = moment.duration(
        moment(this.card.dateTime).diff(moment())
      );

      this.timeRemaining = `${timeToBattle.hours()} hours ${timeToBattle.minutes()} min`;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.battle-card {
  width: vw(336px);
  min-height: vw(360px);
  padding: vw(25px);
  position: relative;
  display: flex;
  background: $cl-white;
  border: 1px solid rgba(143, 154, 157, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  @include max(md) {
    min-width: 200px;
    width: 100%;
    min-height: 240px;
    margin-bottom: 12px;
    padding: 15px;
  }
  @include max(sm) {
    min-height: 225px;
  }
  &-link {
    transition: border 0.3s ease-in-out;
    &:hover {
      border: 1px solid $cl-red;
    }
  }
  .battle-name {
    position: absolute;
    top: vw(25px);
    left: vw(25px);
    color: $cl-grey-dr;
    @include max(md) {
      top: 15px;
      left: 15px;
    }
  }
  .battle-status {
    position: absolute;
    right: 0;
    top: 0;
    width: vw(182px);
    height: vw(164px);
    background-image: url("~static/icons/date-star.svg");
    background-repeat: no-repeat;
    background-size: cover;
    @include max(md) {
      width: 160px;
      height: 140px;
      background-position: bottom;
    }
    .show-date_wrapper {
      position: absolute;
      top: vw(25px);
      right: vw(25px);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @include max(md) {
        top: 15px;
        right: 15px;
      }
      .caption {
        color: $cl-grey-dr;
      }
    }
    &_live {
      background-image: url("~static/icons/live-star.svg");
      .show-date_wrapper {
        @include max(md) {
          top: 15px;
          right: 30px;
        }
        .play {
          margin-bottom: vw(9px);
          margin-right: 5px;
          color: $cl-white;
        }
        .caption {
          text-transform: uppercase;
          color: $cl-white;
          @include max(md) {
            max-width: 40px;
            text-align: center;
          }
        }
      }
    }
  }
}
.battle-container {
  width: 100%;
  margin-top: auto;
  .disciplines {
    width: vw(30px);
    height: vw(30px);
    margin-bottom: vw(15px);
    @include max(md) {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
    }
  }
  .groups {
    &_container {
      width: 100%;
      margin-bottom: vw(10px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include max(md) {
        margin-bottom: 5px;
      }
      .match {
        padding: vw(10px) vw(15px);
        color: $cl-grey-dr;
        background-color: #f0f0f0;
        border-radius: 4px;
        @include max(md) {
          padding: 10px 20px;
        }
      }
    }
    &_wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
.map_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .dot {
    margin: 0 4px;
  }
  .caption {
    color: $cl-grey-dr;
  }
}
</style>
