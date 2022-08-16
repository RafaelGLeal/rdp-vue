<template>
  <NavBarMain />
</template>

<script>
import "@/styles/reset.css";
import "@/styles/normalize.css";
import NavBarMain from "./components/NavBarMain.vue";
import EventServices from "./services/EventService";
export default {
  name: "App",
  components: {
    NavBarMain,
  },
  created() {
    EventServices.getEvents().then((response) => {
      localStorage.setItem(
        "member_count",
        JSON.stringify(response.data.approximate_member_count)
      );
      localStorage.setItem(
        "presence_count",
        JSON.stringify(response.data.approximate_presence_count)
      );
    });
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
  --font-heading: "Cinzel", serif;
  --font-body: "Raleway", sans-serif;
  --f-size-sm: 1.5em;
  --f-size-md: 2.25em;
  --f-size-lg: 3.375em;
  --transition: 0.5s cubic-bezier(0.365, 0.183, 0.153, 0.846);
}

* {
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  min-width: 380px;
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
    z-index: -40;
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
  i {
    color: var(--white);
  }
}
header {
  width: 100%;
  z-index: 200;
  position: absolute;
}
.btn {
  border: 1px solid var(--white);
  cursor: pointer;
  font-family: var(--font-body);
  padding: 0.8em 1em;
  display: flex;
  position: relative;
  transition: var(--transition);
  overflow: hidden;
  background: transparent;
  span {
    letter-spacing: 1px;
    font-weight: 500;
    color: var(--white);
    text-transform: uppercase;
    margin-right: 0.3em;
    transition: var(--transition);
  }
  .bx-arrow-back {
    transform: rotate(-140deg) translateX(-2px);
    transition: var(--transition);
  }
  span:nth-child(2) {
    position: absolute;
    transform: translateY(-200%);
    transition: var(--transition);
  }
  &:hover {
    background: #afafaf;
    background: -moz-radial-gradient(top right, #d4d4d411, #11060626);
    background: radial-gradient(to bottom left, #d4d4d411, #11060626);
    background: -webkit-radial-gradient(top right, #d4d4d411, #11060626);
    transition: var(--transition);

    span:nth-child(2) {
      position: absolute;
      transform: translateY(0%);
      transition: var(--transition);
    }
    span:nth-child(1) {
      transform: translateY(200%);
      transition: var(--transition);
    }
    .bx-arrow-back {
      transform: rotate(-180deg) translateX(-2px);
      transition: var(--transition);
    }
  }
}
.section-title {
  font-size: var(--f-size-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  &.vip {
    span {
      color: var(--dark-red);
    }
    span:nth-child(1) {
      color: var(--white);
    }
  }
  span {
    font-weight: 400;
    font-family: var(--font-heading);
  }
  span:nth-child(1) {
    color: var(--dark-red);
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
@keyframes cardIcon {
  0% {
    transform: translateX(-2px);
  }
  25% {
    transform: translateX(2px) rotate(-1deg);
  }
  50% {
    transform: translateY(-2px) rotate(1deg);
  }
  75% {
    transform: translateX(0px) rotate(2deg);
  }
  100% {
    transform: translateX(-2px);
  }
}
</style>
