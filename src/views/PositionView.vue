<template>
  <section class="position">
    <h3 class="section-title vip" data-aos="fade-up">
      <span>obtenha</span>
      <span>cargos</span>
    </h3>
    <p>Obtenha os melhores cargos e sinta o que é uma vida de Lord.</p>
    <CardMain cardName="lord" />
    <CardMain cardName="posse" />
    <FooterMain />
  </section>
</template>
<script>
import FooterMain from "@/components/Footer/FooterMain.vue";
import CardMain from "@/components/Cards/CardPosMain.vue";
export default {
  components: {
    CardMain,
    FooterMain,
  },
};
</script>
<style lang="scss" scoped>
.position {
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
    background-image: url(@/assets/red-vip-bg.png);
    background-repeat: no-repeat;
    background-size: 30%;
    top: 60vh;
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
  }
  h3 {
    padding-top: 30vh;
  }
  p {
    font-weight: 500;
    text-align: center;
    line-height: 2.1em;
    margin: 4em auto 10em;
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
