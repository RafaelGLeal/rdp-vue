<template>
  <div
    :class="cardName === 'lord' ? 'card' : 'card posse'"
    data-aos="zoom-out-left"
    data-aos-duration="700"
  >
    <h4
      :class="cardName === 'lord' ? 'card-title lord' : 'card-title posse'"
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
      <span v-if="cardName === 'lord'">R${{ dataList.prices[0].price }}</span>
      <span v-if="cardName === 'posse'">R${{ dataList.prices[1].price }}</span>
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
      return this.cardName === "lord"
        ? this.dataList.lord
        : this.dataList.posse;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 90%;
  margin: 4em 0;
  &-title span {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 5px;
    font-size: var(--f-size-sm);
    font-family: var(--font-heading);
    position: relative;
    &::before {
      content: "da perdição";
      position: absolute;
      width: 100%;
      height: 100%;
      right: -100%;
      font-size: 0.5em;
    }
  }
  &-title {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 230px;
      height: 220px;
      background-image: url(@/assets/skull.png);
      background-size: contain;
      background-repeat: no-repeat;
      right: -5%;
      z-index: 1;
      top: -100px;
      animation: cardIcon 8s linear infinite;
    }
    &::after {
      content: "";
      position: absolute;
      width: 230px;
      height: 180px;
      background-color: var(--dark-red);
      right: -30%;
      z-index: -1;
      top: -60px;
      filter: blur(50px) opacity(0.5);
    }
    &.posse {
      &::before {
        background-image: url(@/assets/hand.png);
        right: -15%;
      }
      span::before {
        width: 0;
        content: "";
      }
    }
    @media (min-width: 440px) {
      &.posse::before {
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
      &.posse::before {
        right: -15%;
      }
    }
    @media (min-width: 840px) {
      &::before {
        right: 0%;
      }
      &.posse::before {
        right: 0%;
      }
    }
  }
  &-box {
    width: 100%;
    margin: 1em auto 0;
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    border: 1px solid #afafaf31;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 3em;
    position: relative;
    &__title {
      font-size: 1.2em;
      margin: 3em 0 2em;
      transform: translateX(-1em);
      align-self: center;
      span {
        font-weight: 500;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
    }
    ul li {
      list-style: disc;
      font-weight: 300;
      font-size: 0.9em;
      line-height: 1.5em;
    }
    span {
      align-self: flex-end;
      margin-top: 2em;
      font-weight: 600;
    }
  }
}
</style>
