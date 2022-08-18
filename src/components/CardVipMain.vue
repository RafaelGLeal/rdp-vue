<template>
  <div
    :class="cardName === 'premium' ? 'card' : 'card diamond'"
    data-aos="zoom-out-left"
    data-aos-duration="700"
  >
    <h4
      :class="cardName === 'premium' ? 'card-title' : 'card-title diamond'"
      data-aos="zoom-out-left"
      data-aos-delay="200"
      data-aos-duration="600"
    >
      <span>{{ cardName }}</span>
    </h4>
    <div class="card-box">
      <h5 class="card-box__title">
        <span>Vantagens</span>
      </h5>
      <ul>
        <li v-for="cardName in getCardName" :key="getCardName[cardName.id]">
          {{ cardName.benefit }}
        </li>
      </ul>
      <span v-if="cardName === 'premium'"
        >R${{ dataList.prices[0].price }}</span
      >
      <span v-if="cardName === 'diamond'"
        >R${{ dataList.prices[1].price }}</span
      >
    </div>
  </div>
</template>

<script>
import dataJson from "@/services/data.json";

export default {
  name: "CarMain",
  props: {
    cardName: String,
  },
  data() {
    return {
      cardType: null,
      dataList: dataJson,
    };
  },
  computed: {
    getCardName() {
      return this.cardName === "premium"
        ? this.dataList.premium
        : this.dataList.diamond;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  max-width: 80%;
  margin: 4em 0;
  border-top-right-radius: 1px;
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
      background-image: url(@/assets/red-diamond.png);
      background-size: contain;
      background-repeat: no-repeat;
      right: -30%;
      z-index: 1;
      top: -70px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 230px;
      height: 180px;
      background-color: var(--dark-red);
      right: -30%;
      z-index: 1;
      top: -60px;
      filter: blur(50px) opacity(0.3);
    }
    &.diamond {
      &::before {
        background-image: url(@/assets/blue-diamond.png);
      }
      &::after {
        background-color: var(--blue);
      }
    }
    @media (min-width: 440px) {
      &.diamond::before {
        right: -25%;
      }
      &::before {
        right: -25%;
      }
    }
    @media (min-width: 525px) {
      &::before {
        right: -15%;
      }
      &.diamond::before {
        right: -15%;
      }
    }
    @media (min-width: 840px) {
      &::before {
        right: -10%;
      }
      &.diamond::before {
        right: -10%;
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
    padding: 2em 4em 1em 4em;
    position: relative;
    z-index: -1;
    // &::before {
    //   content: "Diamond";
    //   font-family: var(--font-heading);
    //   font-weight: 300;
    //   bottom: -80px;
    //   left: -100px;
    //   opacity: 0.1;
    //   position: absolute;
    //   text-transform: uppercase;
    //   font-size: 5em;
    // }
    &__title {
      font-size: 1.2em;
      align-self: flex-start;
      margin: 1em 0 2em;
      transform: translateX(-1em);
      span {
        font-weight: 500;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
    ul li {
      list-style: disc;
      font-weight: 400;
      font-size: 0.9em;
      line-height: 1.6em;
    }
    span {
      align-self: flex-end;
      margin-top: 2em;
      font-weight: 600;
    }
  }
}
</style>
