<template>
  <button class="hamburger" type="button">
    <span class="hamburger-box"> </span>
  </button>
</template>

<script>
export default {
  name: "BtnActive",
};
</script>

<style lang="scss">
.hamburger {
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  transition: var(--transition);

  &.toggled {
    transition: var(--transition);
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
  &-box {
    background-color: var(--white);
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    transition: var(--transition);
    &::before {
      content: "";
      width: 100%;
      height: 4px;
      position: absolute;
      background-color: var(--white);
      top: -14px;
      left: 0;
      transition: var(--transition);
    }
    &::after {
      content: "";
      width: 100%;
      height: 4px;
      position: absolute;
      background-color: var(--white);
      top: 14px;
      left: 0;
      transition: var(--transition);
    }
  }
  &:hover .hamburger-box {
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
</style>
