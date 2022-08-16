<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__brand">
      <img src="@/assets/logo.png" alt="" />
    </router-link>
    <transition>
      <div class="navbar__menu">
        <router-link to="/">Início</router-link>
        <router-link to="/vips">Vip</router-link>
        <router-link to="/position">Cargos</router-link>
        <router-link to="/fivem">Fivem</router-link>
        <router-link to="/about">Sobre</router-link>
      </div>
    </transition>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBarMobile",
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: red;
}
</style>
