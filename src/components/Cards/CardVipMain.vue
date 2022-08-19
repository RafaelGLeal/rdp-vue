<template>
  <div
    :class="cardName === 'premium' ? 'card' : 'card diamond'"
    data-aos="zoom-out-left"
    data-aos-duration="700"
  >
    <div>
      <h4
        :class="cardName === 'premium' ? 'card-title' : 'card-title diamond'"
        data-aos="zoom-out-left"
        data-aos-delay="200"
        data-aos-duration="600"
      >
        <span>{{ cardName }}</span>
      </h4>
      <span class="opac-title">{{ cardName }}</span>
      <img :src="cardName === 'premium' ? redDiamond : blueDiamond" alt="" />
    </div>
    <div class="card-box">
      <h5 class="card-box__title">
        <span>Vantagens</span>
      </h5>
      <ul>
        <li v-for="cardName in getCardName" :key="getCardName[cardName.id]">
          {{ cardName.benefit }}
        </li>
      </ul>
      <span v-if="cardName === 'premium'" class="card-price">{{
        dataList.prices[0].price
      }}</span>
      <span v-if="cardName === 'diamond'" class="card-price">{{
        dataList.prices[1].price
      }}</span>
    </div>
  </div>
</template>

<script>
import dataJson from "@/services/data.json";
import redDiamond from "@/assets/red-diamond.png";
import blueDiamond from "@/assets/blue-diamond.png";
export default {
  name: "CarMain",
  props: {
    cardName: String,
  },
  data() {
    return {
      cardType: null,
      dataList: dataJson,
      redDiamond,
      blueDiamond,
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
  margin: 6em 0;
  div {
    display: flex;
    position: relative;
    img {
      position: absolute;
      top: -700%;
      right: -50%;
      animation: cardIcon 12s linear infinite;
      z-index: 20;
      @media (min-width: 600px) {
        right: -20%;
        top: -400%;
      }
    }
  }
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
    font-weight: 400;
    letter-spacing: 5px;
    font-size: var(--f-size-sm);
    font-family: var(--font-heading);
    @media (min-width: 1100px) {
      font-size: var(--f-size-md);
    }
  }
  &-title {
    position: relative;
    width: 100%;
  }
  &-box {
    width: 100%;
    margin: 1em auto 0;
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    display: flex;
    border: 1px solid #afafaf31;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 2em 2em 4em 4em;
    @media (min-width: 1100px) {
      padding: 2em 4em 2em 6em;
    }
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
      max-width: 50ch;
      line-height: 1.2em;
    }
    span {
      align-self: flex-start;
      margin-top: 2em;
      font-weight: 600;
      font-size: var(--f-size-sm);
      position: relative;
    }
    .card-price {
      align-self: flex-end;
      &::before {
        content: "R$";
        font-size: 0.5em;
        margin-right: 0.5em;
        font-family: var(--font-heading);
      }
    }
  }
}
</style>
