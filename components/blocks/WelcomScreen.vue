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
  background-image: url("image/firstscreen-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.welcom-screen__description {
  max-width: vw(720px);
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .game-icon {
    margin-bottom: vw(49px);
  }
  .h2 {
    margin-bottom: vw(50px);
    color: $cl-white;
  }
  .description {
    position: relative;
    height: fit-content;
    padding-left: vw(42px);
    margin-bottom: vw(87px);
    display: flex;
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
    .button-bl:not(:last-child) {
      margin-right: vw(35px);
    }
  }
}
.welcom-screen__extra-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .description {
    margin-bottom: vw(100px);
    &_item {
      display: flex;
      align-items: center;
      .p2 {
        color: $cl-white;
        &:first-child {
          margin-right: vw(40px);
        }
      }
    }
  }
  .social-links {
    a {
      color: $cl-white;
      &:not(:last-child){
        margin-right: vw(40px);
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
          color: #4376A6;
        }
      }
    }
  }
}
</style>
