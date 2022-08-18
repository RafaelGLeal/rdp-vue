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
  </section>
  <FooterMain />
</template>
<script>
import FooterMain from "@/components/FooterMain.vue";
import CardMain from "@/components/CardVipMain.vue";
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
    opacity: 0.8;
  }
  h3 {
    padding-top: 30vh;
  }
  p {
    font-weight: 500;
    text-align: center;
    line-height: 2.6em;
    margin: 4em auto 10em;
    width: 80%;
  }
}
</style>
