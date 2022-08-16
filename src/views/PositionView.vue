<template>
  <section class="vips">
    <h3 class="section-title vip">
      <span>obtenha</span>
      <span>cargos</span>
    </h3>
    <p>Obtenha os melhores cargos e sinta o que é uma vida de Lord.</p>
    <CardMain cardList="lord" />
    <CardMain cardList="posse" />
  </section>
  <FooterMain />
</template>
<script>
import FooterMain from "@/components/FooterMain.vue";
import CardMain from "@/components/CardPosMain.vue";
export default {
  components: {
    CardMain,
    FooterMain,
  },
};
</script>
<style lang="scss">
.vips {
  width: 100%;
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
    background-image: url(@/assets/vipRedBG.png);
    background-repeat: no-repeat;
    background-size: 30%;
    top: 60vh;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/vipBlueBG.png);
    background-repeat: no-repeat;
    background-size: 20%;
    bottom: -10vh;
    background-position-x: right;
    background-position-y: bottom;
  }
  h3 {
    padding-top: 30vh;
  }
  p {
    font-weight: 500;
    text-align: center;
    line-height: 1.5em;
    margin: 4em auto 10em;
    width: 90%;
  }
}
</style>
