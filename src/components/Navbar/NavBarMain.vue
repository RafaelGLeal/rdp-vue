<template>
  <div v-if="isLargeScreen">
    <NavBarDesktop />
  </div>
  <div v-else>
    <NavBarMobile />
  </div>
</template>

<script>
import { useMediaQuery } from "@vueuse/core";
import NavBarMobile from "@/components/Navbar/NavBarMobile.vue";
import NavBarDesktop from "@/components/Navbar/NavBarDesktop.vue";

export default {
  name: "NavBar",
  components: {
    NavBarDesktop,
    NavBarMobile,
  },
  setup() {
    const isLargeScreen = useMediaQuery("(min-width: 950px)");
    return {
      isLargeScreen,
    };
  },
};
</script>
