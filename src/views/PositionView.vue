<template>
  <section class="vips">
    <h3 class="section-title vip" data-aos="fade-up">
      <span>obtenha</span>
      <span>cargos</span>
    </h3>
    <p>Obtenha os melhores cargos e sinta o que é uma vida de Lord.</p>
    <CardMain cardName="lord" />
    <CardMain cardName="posse" />
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
<style lang="scss" scoped>
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
    z-index: -1;
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
