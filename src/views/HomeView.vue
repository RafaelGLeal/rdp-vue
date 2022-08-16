<template>
  <main>
    <section class="hero">
      <h1>RDP</h1>
      <h2>reino da perdição</h2>
      <BtnPrimary name="Descobrir" icon="bx bx-arrow-back" />
    </section>
    <section class="stats">
      <div class="stats-container">
        <div class="stats-container__item">
          <span>{{ member_count }}</span>
          <span>Membros</span>
        </div>
        <div class="stats-container__item">
          <span>2</span>
          <span>Donos</span>
        </div>
        <div class="stats-container__item">
          <span>{{ presence_count }}</span>
          <span>Online</span>
        </div>
      </div>
      <h3 class="section-title">
        <span>perca-se</span>
        <span>na comunidade</span>
      </h3>
      <p>
        RDP é uma comunidade no Discord de diversão aberta, focada em promover
        momentos de lazer aos membros com entretenimento, interações, torneios
        de jogos e muita treta!
      </p>
      <BtnPrimary name="Junte-se" icon="bx bxl-discord-alt" />
    </section>
  </main>
  <FooterMain />
</template>

<script>
import BtnPrimary from "@/components/BtnPrimary.vue";
import FooterMain from "@/components/FooterMain.vue";
export default {
  name: "HomeView",
  components: { FooterMain, BtnPrimary },
  data() {
    return {
      member_count: window.localStorage.getItem("member_count"),
      presence_count: window.localStorage.getItem("presence_count"),
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url(@/assets/bgMobile.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -40 !important;
    opacity: 0.3;
  }
  @media (min-width: 680px) {
    &::before {
      background-image: url(@/assets/bgHome.png);
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 80px;
    background-color: var(--dark-blue);
    bottom: -30px;
    z-index: -40;
    filter: blur(30px);
  }
  h1 {
    font-size: 6em;
    margin-top: 40vh;
    font-weight: 600;
  }
  h2 {
    margin-bottom: 1em;
    transform: translateY(-2em);
    font-size: var(--f-size-sm);
  }
}
.stats {
  width: 100%;
  margin: 3em auto 0;
  display: grid;
  place-items: center;
  &-container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 840px) {
      flex-direction: row;
      gap: 5em;
      justify-content: space-around;
    }
    &__item {
      flex: 1;
      width: 100%;
      padding: 0.5em 3em;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #afafaf;
      background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
      background: radial-gradient(to bottom left, #d4d4d411, #11060626);
      background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
      span:nth-child(1) {
        font-size: var(--f-size-sm);
        font-weight: 500;
        margin-bottom: 0.5em;
      }
      span:nth-child(2) {
        font-weight: 300;
      }
    }
  }
  .section-title {
    margin: 4em 0 2em;
  }
  p {
    font-weight: 500;
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 3em;
    width: 90%;
  }
}
</style>
