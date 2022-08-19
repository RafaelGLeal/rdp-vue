<template>
  <div class="profile">
    <h4 :class="getProfileClass">
      <span>
        {{ getCardName }}
      </span>
    </h4>
    <span class="opac-title">
      {{ getCardName }}
    </span>
    <div class="profile-box">
      <img :src="getAvatar" alt="" />
      <div class="profile-box__icons">
        <a :href="getInstagram">
          <i class="bx bxl-instagram"></i>
          <span>instagram</span>
        </a>
        <a :href="getDiscordId">
          <i class="bx bxl-discord-alt"></i>
          <span>discord</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import avatarKing from "@/assets/kingAvatar.png";
import avatarImp from "@/assets/impAvatar.png";

export default {
  name: "CardProfileMain",
  props: {
    profileName: String,
  },
  data() {
    return {
      king: {
        discord: "https://discord.com/users/649793871693479956",
        instagram: "https://www.google.com",
      },
      imp: {
        discord: "https://discord.com/users/255015900363620352",
        instagram: "https://www.instagram.com/kingninja_oficial/",
      },
    };
  },
  computed: {
    getCardName() {
      return this.profileName === "king" ? "king" : "imp";
    },
    getAvatar() {
      return this.profileName === "king" ? avatarKing : avatarImp;
    },
    getProfileClass() {
      return this.profileName === "king"
        ? "profile-title"
        : "profile-title imp";
    },
    getDiscordId() {
      return this.profileName === "king" ? this.king.discord : this.imp.discord;
    },
    getInstagram() {
      return this.profileName === "king"
        ? this.king.instagram
        : this.imp.instagram;
    },
  },
};
</script>

<style lang="scss">
.profile {
  position: relative;
  max-width: 80%;
  margin: 4em 0;
  border-top-right-radius: 1px;
  .opac-title {
    position: absolute;
    font-size: 7em;
    font-family: var(--font-heading);
    opacity: 0.1;
    top: -0.6em;
    left: -0.3em;
  }
  &-title span {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 5px;
    font-size: var(--f-size-sm);
    font-family: var(--font-heading);
  }
  &-title {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 230px;
      height: 180px;
      background-image: url(@/assets/king-card.png);
      background-size: contain;
      background-repeat: no-repeat;
      right: -60%;
      z-index: 1;
      top: -70px;
    }
    &.imp {
      &::before {
        background-image: url(@/assets/imp-card.png);
        right: -50%;
        top: -110px;
      }
    }
  }

  &-box {
    width: 100%;
    margin: 0.1em auto 0;
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    display: flex;
    border: 1px solid #afafaf31;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    position: relative;
    z-index: 100;
    img {
      width: 200px;
      height: 250px;
    }
    &__icons {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      margin-top: 1em;
      z-index: 999 !important;

      a {
        display: flex;
        align-items: center;
        gap: 0.5em;
        i {
          font-size: 1.2em;
        }
        span {
          color: var(--white);
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
