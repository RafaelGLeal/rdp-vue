<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__brand">
      <img :src="logo" alt="" />
    </router-link>

    <div class="navbar__toggle" @click="toggleMenu">
      <BtnActive v-if="!active" />
      <BtnToggled v-else />
    </div>

    <transition>
      <div :class="[active ? menuMobile : menuMobileActive]">
        <router-link to="/vips">Vip</router-link>
        <router-link to="/position">Cargos</router-link>
        <router-link to="/about">Sobre</router-link>
      </div>
    </transition>
  </nav>
  <router-view />
</template>

<script>
import "@/styles/reset.css";
import "@/styles/normalize.css";
import logoRDP from "@/assets/ws.svg";
import BtnActive from "./components/toggle/BtnActive.vue";
import BtnToggled from "./components/toggle/BtnToggled.vue";
export default {
  name: "App",
  components: {
    BtnActive,
    BtnToggled,
  },

  data() {
    return {
      active: false,
      logo: logoRDP,
      menuMobile: "navbar__menu",
      menuMobileActive: "navbar__menu.active",

      menuDesktop: "navbar__menuDesk",
    };
  },
  methods: {
    toggleMenu: function (event) {
      return (this.active = !this.active);
    },
  },
};
</script>

<style lang="scss">
:root {
  --dark-blue: #0f171d;
  --dark-red: #9b2c24;
  --blue: #a1eeff;
  --white: #e2e2e2;
  --white-transparent: #ddddddab;
  --font-heading: "Bespoke Slab", sans-serif;
  --font-body: "Poppins", sans-serif;
  --f-size-sm: 1.5em;
  --f-size-md: 2.25em;
  --f-size-lg: 3.375em;
  --transition: 0.5s cubic-bezier(0.365, 0.183, 0.153, 0.846);
  --zindex-overlay: -30;
}

* {
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 15px;
  margin: 0 auto;
  background-color: var(--dark-blue);
  color: var(--white);
  position: relative;
  scroll-behavior: smooth;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/overlay.png");
    z-index: var(--zindex-overlay);
    opacity: 0.3;
  }
  p,
  a,
  span,
  li {
    letter-spacing: 1px;
    font-family: var(--font-body);
    font-weight: 300;
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
  }
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 2em;
  &__brand {
    width: 70px;
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
  }
  a {
    color: var(--white);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (min-width: 600px) {
  .navbar {
    background-color: red;
    &__brand {
      position: relative;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transform: translateX(0px);
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>
