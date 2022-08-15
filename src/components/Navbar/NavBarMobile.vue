<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__brand">
      <img src="@/assets/logo.png" alt="" />
    </router-link>
    <BtnToggleMenu
      @click="toggleMenu"
      :toggle="active ? 'hamburger toggled' : 'hamburger'"
    />
    <transition>
      <div :class="active ? 'navbar__menu' : 'navbar__menu disabled'">
        <router-link @click="toggleMenu" to="/">Início</router-link>
        <router-link @click="toggleMenu" to="/vips">Vip</router-link>
        <router-link @click="toggleMenu" to="/position">Cargos</router-link>
        <router-link @click="toggleMenu" to="/vips">Fivem</router-link>
        <router-link @click="toggleMenu" to="/about">Sobre</router-link>
      </div>
    </transition>
  </nav>
  <router-view />
</template>

<script>
import BtnToggleMenu from "../BtnToggleMenu.vue";
export default {
  name: "NavBarMobile",
  components: {
    BtnToggleMenu,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleMenu: function () {
      return (this.active = !this.active);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  position: fixed;
  padding: 2em;
  z-index: 2;
  &__brand {
    width: 70px;
    transform: translateY(7px);
    z-index: 40;
    img {
      max-width: 100%;
    }
  }
  &__menu {
    align-items: center;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
    display: flex;
    gap: 2em;
    padding: 2em;
    flex-direction: column;
    transition: var(--transition);
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 600px;
      background-color: var(--dark-blue);
      top: -50%;
      z-index: -3;
    }
    &.disabled {
      transform: translateX(-100%);
      transition: var(--transition);
    }
  }

  a {
    color: var(--white);
    font-size: 2em;
    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
