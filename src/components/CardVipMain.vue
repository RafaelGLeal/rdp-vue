<template>
  <div :class="cardList === 'premium' ? 'card' : 'card diamond'">
    <h4 class="card-title">
      <span>{{ cardList }}</span>
    </h4>
    <div class="card-box">
      <h5 class="card-box__title">
        <span>Vantagens</span>
      </h5>

      <ul v-if="cardList === 'premium'">
        <li v-for="data in dataList.premium" :key="dataList[data.id]">
          {{ data.benefit }}
        </li>
      </ul>
      <ul v-if="cardList === 'diamond'">
        <li v-for="data in dataList.diamond" :key="dataList[data.id]">
          {{ data.benefit }}
        </li>
      </ul>
      <ul v-if="cardList === 'lord'">
        <li v-for="data in dataList.lord" :key="dataList[data.id]">
          {{ data.benefit }}
        </li>
      </ul>
      <ul v-if="cardList === 'posse'">
        <li v-for="data in dataList.posse" :key="dataList[data.id]">
          {{ data.benefit }}
        </li>
      </ul>
      <span v-if="cardList === 'premium'"
        >R${{ dataList.prices[0].price }}</span
      >
      <span v-if="cardList === 'diamond'"
        >R${{ dataList.prices[1].price }}</span
      >
      <span v-if="cardList === 'lord'">R${{ dataList.prices[2].price }}</span>
      <span v-if="cardList === 'posse'">R${{ dataList.prices[3].price }}</span>
    </div>
  </div>
</template>

<script>
import data from "@/services/data.json";

export default {
  name: "CarMain",
  props: {
    cardList: String,
  },
  data() {
    return {
      cardType: null,
      dataList: data,
    };
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  width: 75%;
  margin: 4em 0;
  &.diamond {
    &::before {
      background-image: url(@/assets/223.png);
      top: -25%;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/23.png);
    top: -100px;
    right: -30%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: top;
    animation: cardIcon 5s linear infinite;
  }
  @media (min-width: 440px) {
    &.diamond::before {
      top: -130px;
    }
    &::before {
      top: -130px;
    }
  }
  @media (min-width: 525px) {
    &::before {
      top: -150px;
    }
    &.diamond::before {
      top: -150px;
    }
  }
  @media (min-width: 840px) {
    &::before {
      top: -160px;
      right: -25%;
    }
    &.diamond::before {
      top: -160px;
      right: -25%;
    }
  }
  &-title span {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 5px;
    font-size: var(--f-size-sm);
  }
  &-box {
    width: 100%;
    margin: 1em auto 0;
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 3em;
    position: relative;
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
    }
    span {
      align-self: flex-end;
      margin-top: 2em;
      font-weight: 600;
    }
  }
}
</style>
