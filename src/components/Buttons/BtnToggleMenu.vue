<template>
  <button :class="toggle">
    <span class="hamburger-box"> </span>
  </button>
</template>

<script>
export default {
  name: "ToggleMenu",
  props: {
    toggle: String,
  },
};
</script>

<style lang="scss">
.hamburger {
  width: 50px;
  height: 50px;
  padding: 0.5em;
  position: relative;
  transition: var(--transition);
  cursor: pointer;
  &-box {
    background-color: var(--white);
    width: 50px;
    height: 2px;
    position: absolute;
    right: 0em;
    transition: var(--transition);
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      background-color: var(--white);
      top: -11px;
      left: 0;
      transition: var(--transition);
    }
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      background-color: var(--white);
      top: 11px;
      left: 0;
      transition: var(--transition);
    }
  }
  &:hover {
    .hamburger-box {
      background-color: transparent;
      transition: var(--transition);
      &::before {
        transition: var(--transition);
        top: -8px;
      }
      &::after {
        transition: var(--transition);
        top: 8px;
      }
    }
  }
}
.toggled {
  transition: var(--transition);
  z-index: 50;
  &:hover .hamburger-box {
    &::after,
    &::before {
      top: 0;
      transition: var(--transition);
    }
  }
  .hamburger-box {
    background-color: transparent;
    transition: var(--transition);

    &::after {
      transform: rotate(30deg);
      top: 0;
      transition: var(--transition);
    }
    &::before {
      top: 0;
      transform: rotate(-30deg);
      transition: var(--transition);
    }
  }
}
</style>
