<template>
  <nav class="navbar-desktop" ref="navDesk">
    <router-link to="/" class="navbar-desktop__brand">
      <img src="@/assets/logo.png" alt="rdp logo" />
    </router-link>
    <transition>
      <div class="navbar-desktop__menu">
        <router-link to="/">
          <span>Início</span>
          <span>Início</span>
        </router-link>
        <router-link to="/vips"><span>Vip</span> <span>Vip</span></router-link>
        <router-link to="/position"
          ><span>Cargos</span> <span>Cargos</span></router-link
        >
        <router-link to="/fivem"
          ><span>Fivem</span> <span>Fivem</span></router-link
        >
        <router-link to="/about"
          ><span>Sobre</span> <span>Sobre</span></router-link
        >
      </div>
    </transition>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBarMobile",
  mounted() {
    window.onscroll = () => {
      const navBar = this.$refs.navDesk;

      if (document.body > 50 || document.documentElement.scrollTop > 50) {
        navBar.classList.add("scroll");
      } else {
        navBar.classList.remove("scroll");
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  height: fit-content;
  position: fixed;
  padding: 3em 5em;
  z-index: 999;
  transition: var(--transition);

  &.scroll {
    padding: 1.5em 2.5em;
    background-color: var(--dark-blue);
  }

  &__brand {
    width: 70px;
    transform: translateY(7px);
    z-index: 40;

    img {
      max-width: 100%;
    }
  }
  &__menu {
    display: flex;
    align-items: center;
    gap: 3em;

    a {
      letter-spacing: 1px;
      color: var(--white);
      text-transform: capitalize;
      position: relative;
      transition: var(--transition);
      overflow: hidden;

      &.router-link-exact-active {
        text-decoration: underline;
        text-underline-offset: 5px;
      }

      span {
        display: block;
        font-weight: 600;
        font-size: 1em;
      }

      span:nth-child(1) {
        transition: var(--transition);
        transform: translateY(10px);
        opacity: 1;
      }

      span:nth-child(2) {
        transform: translateY(-30px);
        transition: var(--transition);
        opacity: 0;
      }

      &:hover {
        span:nth-child(1) {
          transform: translateY(30px);
          transition: var(--transition);
          opacity: 0;
        }

        span:nth-child(2) {
          transform: translateY(-5px);
          transition: var(--transition);
          opacity: 1;
        }
      }
    }
  }
}
</style>
