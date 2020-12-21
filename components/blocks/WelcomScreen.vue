<template>
  <div class="welcom-screen">
    <div class="welcom-screen__description">
      <img
        class="game-icon"
        :src="demo.home.welcomScreen.gameIcon.src"
        :alt="demo.home.welcomScreen.gameIcon.alt"
      />
      <h1 class="h2">{{ demo.home.welcomScreen.title }}</h1>

      <div class="description">
        <span></span>
        <p class="p2">{{ demo.home.welcomScreen.description }}</p>
      </div>

      <div class="button_wrapper">
        <Button
          :accent="true"
          :data="demo.home.welcomScreen.buttonAnnouncement"
        />
        <Button :data="demo.home.welcomScreen.buttonTickets" />
      </div>
    </div>
    <div class="welcom-screen__extra-info">
      <div class="description">
        <div
          class="description_item"
          v-for="item in demo.home.welcomScreen.extraInfo"
          :key="item.id"
        >
          <p class="p2">{{ item.type }}:</p>
          <p class="p2 accent">{{ item.value }}</p>
        </div>
      </div>
      <div class="social-links">
        <nuxt-link to="/">
          <svg class="twitter">
            <use xlink:href="#twitter"></use>
          </svg>
        </nuxt-link>
        <nuxt-link to="/">
          <svg class="twitch">
            <use xlink:href="#twitch"></use>
          </svg>
        </nuxt-link>
        <nuxt-link to="/">
          <svg class="facebook">
            <use xlink:href="#facebook"></use>
          </svg>
        </nuxt-link>
        <nuxt-link to="/">
          <svg class="vk">
            <use xlink:href="#vk"></use>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";
export default {
  name: "WelcomScreen",
  components: {
    Button,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.welcom-screen {
  width: 100%;
  height: 100vh;
  padding: vw(125px) vw(260px) vw(125px) vw(240px);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-image: url("~static/image/firstscreen-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @include max(lg) {
    padding: 125px 120px;
  }
  @include max(md) {
    padding: 125px 90px 60px 90px;
    flex-direction: column;
    align-items: flex-start;
  }
  @include max(sm) {
    height: 100%;
    flex-direction: column;
    padding: 125px 20px 60px 20px;
  }
}
.welcom-screen__description {
  max-width: vw(720px);
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include max(md) {
    width: 100%;
    max-width: unset;
  }
  @include max(sm) {
    height: 100vh;
    padding-top: 20%;
  }
  .game-icon {
    margin-bottom: vw(49px);
    @include max(md) {
      margin-bottom: 24px;
    }
  }
  .h2 {
    margin-bottom: vw(50px);
    color: $cl-white;
    @include max(sm) {
      margin-bottom: 20px;
    }
  }
  .description {
    position: relative;
    height: fit-content;
    padding-left: vw(42px);
    margin-bottom: vw(87px);
    display: flex;
    @include max(md) {
      padding-left: 20px;
      margin-bottom: 40px;
    }
    span {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 100%;
      display: block;
      background-color: $cl-red;
    }
    .p2 {
      color: $cl-grey-lt;
    }
  }
  .button_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @include max(md) {
      width: 100%;
      margin-bottom: 60px;
    }
    @include max(sm) {
      width: 100%;
      flex-direction: column;
    }
    .button-bl {
      &:not(:last-child) {
        margin-right: vw(35px);
        @include max(md) {
          margin-right: 35px;
        }
         @include max(sm) {
           margin-right: 0;
           margin-bottom: 20px;
         }
      }
    }
  }
}
.welcom-screen__extra-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .description {
    margin-bottom: vw(100px);
    @include max(md) {
      margin-bottom: 30px;
    }
    &_item {
      display: flex;
      align-items: center;
      .p2 {
        color: $cl-white;
        &:first-child {
          margin-right: vw(40px);
          @include max(md) {
            margin-right: 24px;
          }
        }
      }
    }
  }
  .social-links {
    a {
      color: $cl-white;
      &:not(:last-child) {
        margin-right: vw(40px);
        @include max(md) {
          margin-right: 24px;
        }
      }

      .twitter {
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #00acee;
        }
      }
      .twitch {
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #6441a5;
        }
      }
      .facebook {
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #3b5998;
        }
      }
      .vk {
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #4376a6;
        }
      }
    }
  }
}
</style>
