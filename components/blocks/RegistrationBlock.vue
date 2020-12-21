<template>
  <div class="registration-block">
    <div class="registration-block_wrapper">
      <div class="registration-block__item">
        <div class="registration-block__icon done">
          <svg class="registation-icon">
            <use xlink:href="#registation-icon"></use>
          </svg>
          <div class="line"></div>
        </div>
        <div class="registration-block__description">
          <p class="subtitle accent title">Registration</p>
          <p class="subtitle">29 sep, 19:00 – 20 nov, 10:00</p>
        </div>
      </div>
      <div class="registration-block__item">
        <div class="registration-block__icon">
          <svg class="checkin">
            <use xlink:href="#checkin"></use>
          </svg>
          <div class="line"></div>
        </div>
        <div class="registration-block__description">
          <p class="subtitle accent title">Registration</p>
          <p class="subtitle">29 sep, 19:00 – 20 nov, 10:00</p>
        </div>
      </div>
      <div class="registration-block__item">
        <div class="registration-block__icon">
          <svg class="schedul">
            <use xlink:href="#schedul"></use>
          </svg>
        </div>
        <div class="registration-block__description">
          <p class="subtitle accent title">Registration</p>
          <p class="subtitle">29 sep, 19:00 – 20 nov, 10:00</p>
        </div>
      </div>
    </div>
    <RegistrationInfoPopup :data="infoPopupRegistration" />
  </div>
</template>

<script>
import RegistrationInfoPopup from "~/components/blocks/RegistrationInfoPopup";

export default {
  name: "RegistrationBlock",
  components: {
    RegistrationInfoPopup,
  },
  props: {
    infoPopupRegistration: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-block {
  &_wrapper {
    margin-bottom: vw(40px);
    @include max(md) {
      margin-bottom: 30px;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: vw(40px);
      @include max(md) {
        margin-bottom: 30px;
      }
    }
  }
  &__icon {
    width: vw(60px);
    height: vw(60px);
    margin-right: vw(19px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid rgba($cl-grey-dr, 0.5);
    box-shadow: inset 0 0 0 3px #edebeb;
    color: $cl-grey-dr;
    @include max(md) {
      width: 54px;
      height: 54px;
      margin-right: 12px;
    }
    &.done {
      padding: vw(3px);
      border: 1px solid $cl-green;
      box-shadow: inset 0 0 0 3px transparent;
      color: $cl-white;
      &::before {
        content: "";
        position: absolute;
        width: vw(50px);
        height: vw(50px);
        border-radius: 100%;
        background-color: $cl-green;
        @include max(lg) {
          top: 1.5px;
          left: 2px;
        }
        @include max(md) {
          top: auto;
          left: auto;
          width: 44px;
          height: 44px;
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: vw(8px);
        left: vw(-4px);
        background-color: rgba($cl-white, 0.2);
        display: inline-block;
        margin: 0 1em 1em 0;
        height: vw(24px);
        width: vw(24px) * 2;
        border-top-left-radius: vw(50px) * 2;
        border-top-right-radius: vw(50px) * 2;
        transform: rotate(-45deg);
        @include max(lg) {
          top: 4px;
          left: -4px;
        }
        @include max(md) {
          left: -5px;
          height: 24px;
          width: 21.5px * 2;
          border-top-left-radius: 50px * 2;
          border-top-right-radius: 50px * 2;
        }
      }
      .registation-icon {
        position: relative;
        z-index: 2;
      }
    }
    .line {
      position: absolute;
      bottom: vw(-45px);
      left: 50%;
      transform: translateX(-50%);
      height: vw(45px);
      width: vw(5px);
      display: flex;
      background-color: $cl-white;
      box-shadow: inset 1px 0px 2px rgba(0, 0, 0, 0.1);
      z-index: -1;
      @include max(md) {
        height: 35px;
        width: 5px;
        bottom: -35px;
      }
    }
  }
  &__description {
    .title {
      margin-bottom: vw(5px);
    }
  }
}
</style>
