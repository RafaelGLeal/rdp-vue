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
    <BtnPrimary
      name="Junte-se"
      icon="bx bxl-discord-alt"
      href="https://discord.gg/RDP"
      useRoute="false"
    />
    <h5>Staff</h5>
    <div class="card-wrapper">
      <CardProfile profileName="king" />
      <CardProfile profileName="imp" />
    </div>
    <FooterMain />
  </section>
</template>

<script>
import FooterMain from "@/components/Footer/FooterMain.vue";
import CardProfile from "@/components/Cards/CardProfileMain.vue";
import BtnPrimary from "@/components/Buttons/BtnPrimary.vue";

export default {
  components: {
    FooterMain,
    CardProfile,
    BtnPrimary,
  },
};
</script>

<style lang="scss">
.about {
  display: grid;
  place-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
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
    margin: 4em auto 8em;
    width: 80%;
    position: relative;
  }

  h5 {
    width: 70%;
    font-size: var(--f-size-md);
    text-align: center;
    margin: 3em 0 2em;
  }

  .card-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;
  }

  @media (min-width: 1000px) {
    p {
      max-width: 70ch;
    }

    h3 {
      padding-top: 40vh;
    }

    .card-wrapper {
      flex-direction: row;
      gap: 15em;
    }
  }
}
</style>
