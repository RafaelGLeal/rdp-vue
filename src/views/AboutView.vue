<template>
  <section class="about">
    <h3 class="section-title vip" data-aos="fade-up">
      <span>sobre</span>
      <span>nós</span>
    </h3>
    <p>
      RDP é a maior comunidade hot do Discord no Brasil, focada em promover
      momentos de lazer aos membros com entretenimento, interações, torneios de
      jogos e muita treta! Consulte aba de vips e cargos para contúdos
      exclusivos.
    </p>
    <p>
      Agora contamos um com um novo servidor de GTA V Fivem, confira
      <router-link to="/fivem">agora.</router-link>
    </p>
  </section>
  <FooterMain />
  <router-view />
</template>

<script>
import FooterMain from "@/components/FooterMain.vue";
export default {
  components: {
    FooterMain,
  },
};
</script>
