<template>
  <div
    :class="cardName === 'lord' ? 'card' : 'card posse'"
    data-aos="zoom-out-left"
    data-aos-duration="700"
  >
    <div>
      <h4
        :class="cardName === 'lord' ? 'card-title lord' : 'card-title posse'"
        data-aos="zoom-out-left"
        data-aos-delay="200"
        data-aos-duration="600"
      >
        <span>{{ cardName }}</span>
      </h4>
      <span class="opac-title">
        {{ cardName }}
      </span>
      <img :src="cardName === 'lord' ? skullIcon : handIcon" alt="" />
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
      <span v-if="cardName === 'lord'" class="card-price">{{
        dataList.prices[0].price
      }}</span>
      <span v-if="cardName === 'posse'" class="card-price">{{
        dataList.prices[1].price
      }}</span>
    </div>
  </div>
</template>

<script>
import dataJson from "@/services/data.json";
import skullIcon from "@/assets/skull.png";
import handIcon from "@/assets/hand.png";
export default {
  name: "CarMain",
  props: {
    cardName: String,
  },
  data() {
    return {
      cardType: null,
      dataList: dataJson,
      skullIcon,
      handIcon,
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
  max-width: 80%;
  margin: 6em 0;
  div {
    display: flex;
    position: relative;
    img {
      position: absolute;
      top: -900%;
      right: -50%;
      animation: cardIcon 8s linear infinite;

      @media (min-width: 600px) {
        right: -30%;
        top: -700%;
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
    position: relative;
    &::before {
      content: "da perdição";
      width: 50%;
      height: 100%;
      right: -50%;
      font-size: 0.5em;
      position: absolute;
      font-weight: 900;
    }
    @media (min-width: 1100px) {
      font-size: var(--f-size-md);
    }
  }
  &-title {
    position: relative;
    &.posse span::before {
      content: "";
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
    padding: 2em 2em 4em 4em;
    position: relative;
    @media (min-width: 1100px) {
      padding: 2em 8em 2em 6em;
    }
    &__title {
      font-size: 1.2em;
      margin: 1em 0 2em;
      transform: translateX(-1em);
      align-self: flex-start;
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
      max-width: 50ch;
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
