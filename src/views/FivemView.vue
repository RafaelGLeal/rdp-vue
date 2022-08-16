<template>
  <section class="fivem">
    <h3 class="section-title vip">
      <span>Arme-se no</span>
      <span>Fivem</span>
    </h3>
    <p>
      Agora as brincadeiras ficaram mais imersivas. Temos uma cidade no GTA RP
      pronta pra novas aventuras. Entre agora mesmo no nosso servidor e desfrute
      de mais um lugar para a Perdição.
    </p>
    <img src="@/assets/angelFivem.png" alt="" />
    <h5>rdp city disponível agora</h5>
    <ButtonPrimary name="Acessar" icon="bx bxl-discord-alt" />
  </section>
  <footer>
    <img src="@/assets/cityFivem.png" alt="" />
  </footer>
</template>

<script>
import ButtonPrimary from "@/components/BtnPrimary.vue";
export default {
  components: {
    ButtonPrimary,
  },
};
</script>

<style lang="scss">
.fivem {
  display: grid;
  place-items: center;
  width: 100%;
  position: relative;
  img {
    position: absolute;
    max-width: 100%;
    top: 45%;
    left: -20%;
  }
  h3 {
    padding-top: 30vh;
  }
  p {
    font-weight: 500;
    text-align: center;
    line-height: 1.5em;
    margin: 4em auto 15em;
    width: 90%;
    position: relative;
  }
  h5 {
    width: 70%;
    margin: 0 auto;
    font-size: var(--f-size-md);
    text-align: center;
    margin: 2em 0;
  }
}

footer {
  display: flex;
  width: 80%;
  margin: 2em auto;
  justify-content: space-between;
  position: relative;
  img {
    width: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--white-transparent);
    opacity: 0.5;
    bottom: 0;
  }
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 30%);
    z-index: -1;
    filter: blur(70px);
    background-color: var(--dark-red);
  }
}
</style>
