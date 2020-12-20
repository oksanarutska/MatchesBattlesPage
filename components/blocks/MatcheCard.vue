<template>
  <NuxtLinkCondition
    :condition="card.status === 'Live'"
    :nuxtLinkProps="{
      to: '/',
      class: 'matche-card matche-card-link',
    }"
    :component="'div'"
    :componentProps="{
      class: 'matche-card',
    }"
  >
    <p class="caption matche-name">{{ card.name }}</p>
    <div v-if="card.status === 'Live'" class="matche-status matche-status_live">
      <div class="show-date_wrapper">
        <svg class="play">
          <use xlink:href="#play"></use>
        </svg>
        <p class="caption">{{ card.time }}</p>
      </div>
    </div>
    <div v-else class="matche-status">
      <div class="show-date_wrapper">
        <h5 class="h5 time">{{ time }}</h5>
        <span class="caption">{{ date }}</span>
      </div>
    </div>

    <div class="matche-container">
      <div class="logo_wrapper">
        <img :src="card.team1.logo" :alt="card.team1.name" />
        <img :src="card.team2.logo" :alt="card.team2.name" />
      </div>
      <div class="name-teams_wrapper">
        <div class="name-team">
          <h5 class="h5">{{ card.team1.name }}</h5>
          <div class="team-rate">
            <span class="rate">{{ card.team1.rate }}</span>
          </div>
        </div>
        <div class="name-team">
          <h5 class="h5">{{ card.team2.name }}</h5>
          <div class="team-rate">
            <span class="rate">{{ card.team2.rate }}</span>
          </div>
        </div>
      </div>
      <div class="system-partner_wrapper">
        <div class="left-part">
          <div v-if="card.status === 'Upcoming'">
            <span class="caption">Starts in: {{ timeRemaining }}</span>
            <span class="caption dot">•</span>
          </div>
          <p class="caption system">{{ card.system }}</p>
        </div>

        <img class="partner" :src="card.partner" alt="icon" />
      </div>
    </div>
  </NuxtLinkCondition>
</template>

<script>
import NuxtLinkCondition from "../common/NuxtLinkCondition";
import moment from "moment";

export default {
  name: "MatcheCard",
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
      const timeToMatch = moment.duration(
        moment(this.card.dateTime).diff(moment())
      );

      this.timeRemaining = `${timeToMatch.hours()} hours ${timeToMatch.minutes()} min`;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.matche-card {
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
  &-link {
    transition: border 0.3s ease-in-out;
    &:hover {
      border: 1px solid $cl-red;
    }
  }
  .matche-name {
    position: absolute;
    top: vw(25px);
    left: vw(25px);
    color: $cl-grey-dr;
  }
  .matche-status {
    position: absolute;
    right: 0;
    top: 0;
    width: vw(182px);
    height: vw(164px);
    background-image: url("icons/date-star.svg");
    background-repeat: no-repeat;
    background-size: cover;
    .show-date_wrapper {
      position: absolute;
      top: vw(25px);
      right: vw(25px);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .caption {
        color: $cl-grey-dr;
      }
    }
    &_live {
      background-image: url("icons/live-star.svg");
      .show-date_wrapper {
        .play {
          margin-bottom: vw(9px);
          margin-right: 5px;
          color: $cl-white;
        }
        .caption {
          text-transform: uppercase;
          color: $cl-white;
        }
      }
    }
  }
}
.matche-container {
  width: 100%;
  margin-top: auto;
  .logo_wrapper {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    img {
      width: vw(50px);
      height: vw(50px);
      &:not(:last-child) {
        margin-right: vw(15px);
      }
    }
  }
  .name-teams_wrapper {
    width: 100%;
    margin-bottom: 10px;
    .name-team {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: $cl-black;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
      .team-rate {
        width: vw(60px);
        height: vw(24px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: $cl-grey-lt;
        border: 1px solid rgba(151, 151, 151, 0.1);
      }
    }
  }
  .system-partner_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-part {
      display: flex;
      align-items: center;
      .dot {
        margin: 0 4px;
      }
    }
    .caption {
      color: $cl-grey-dr;
    }

    .partner {
      width: vw(62px);
      height: vw(15px);
    }
  }
}
</style>
