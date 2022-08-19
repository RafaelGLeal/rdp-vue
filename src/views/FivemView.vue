<template>
  <section class="fivem">
    <h3 class="section-title vip" data-aos="fade-up">
      <span>Arme-se no</span>
      <span>Fivem</span>
    </h3>
    <p>
      Agora as brincadeiras ficaram mais imersivas. Temos uma cidade no GTA RP
      pronta pra novas aventuras. Entre agora mesmo no nosso servidor e desfrute
      de mais um lugar para a Perdição.
    </p>
    <img
      src="@/assets/angelFivem.png"
      alt="angel with gun artwork"
      class="angel-bg"
    />
    <h5 data-aos="zoom-fade-up" data-aos-delay="200" data-aos-duration="600">
      rdp city disponível agora
    </h5>
    <ButtonPrimary
      name="Acessar"
      icon="bx bxl-discord-alt"
      href="https://discord.gg/rdprp "
      :useRouter="false"
    />
    <footer>
      <img src="@/assets/cityFivem.png" alt="white city artwork" />
    </footer>
  </section>
</template>

<script>
import ButtonPrimary from "@/components/Buttons/BtnPrimary.vue";

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

  .angel-bg {
    position: absolute;
    max-width: 50%;
    top: 20%;
    opacity: 0.4;
    left: 0%;
  }

  h3 {
    padding-top: 30vh;
  }

  p {
    font-weight: 500;
    text-align: center;
    line-height: 2.1em;
    margin: 4em auto 2em;
    width: 80%;
    position: relative;
  }

  h5 {
    width: 70%;
    margin: 0 auto;
    font-size: var(--f-size-md);
    text-align: center;
    margin: 2em 0 2em;
  }

  @media (min-width: 1000px) {
    p {
      max-width: 70ch;
    }

    h3 {
      padding-top: 40vh;
    }

    .angel-bg {
      top: 40%;
      max-width: 30%;
    }

    h5 {
      margin-top: 5em;
    }
  }
  footer {
    display: flex;
    width: 90%;
    margin: 1em auto;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 5em;

    img {
      max-width: 100%;
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
      filter: blur(90px);
      background-color: var(--dark-red);
    }

    @media (min-width: 1000px) {
      &::after {
        opacity: 0.5;
      }
    }
  }
}
</style>
