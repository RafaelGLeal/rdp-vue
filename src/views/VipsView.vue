<template>
  <section class="vips">
    <h3 class="section-title vip" data-aos="fade-up">
      <span>torne-se</span>
      <span>vip</span>
    </h3>
    <p>
      Torne-se Vip na comunindade mais quente do discord. Apoie o servidor e
      receba privilégios exclusivos.
    </p>
    <CardMain cardName="premium" />
    <CardMain cardName="diamond" />
    <FooterMain />
  </section>
</template>
<script>
import FooterMain from "@/components/Footer/FooterMain.vue";
import CardMain from "@/components/Cards/CardVipMain.vue";
export default {
  components: {
    CardMain,
    FooterMain,
  },
};
</script>
<style lang="scss">
.vips {
  max-width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/vipBgRight.png);
    background-repeat: no-repeat;
    background-size: 30%;
    top: 55vh;
    z-index: -1;
    opacity: 0.3;
  }
  &::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 100%;
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    top: 20vh;
    z-index: -50;
  }
  h3 {
    padding-top: 30vh;
  }
  p {
    font-weight: 500;
    text-align: center;
    line-height: 2.1em;
    margin: 4em auto 8em;
    width: 80%;
  }
  @media (min-width: 1000px) {
    p {
      max-width: 70ch;
    }
    h3 {
      padding-top: 40vh;
    }
  }
}
</style>
