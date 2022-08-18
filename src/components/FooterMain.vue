<template>
  <footer>
    <div class="brand">
      <span>RDP® 2022</span>
    </div>
    <a href="https://google.com">
      <i class="bx bxl-discord-alt"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: "FooterMain",
};
</script>

<style lang="scss">
footer {
  display: flex;
  width: 80%;
  margin: 8em auto 1em;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  .brand span {
    font-weight: 500;
    font-family: var(--font-heading);
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--white-transparent);
    opacity: 0.5;
    bottom: -0.1em;
    z-index: 100;
  }
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    left: 25%;
    right: 25%;
    z-index: -1;
    filter: blur(70px);
    background-color: var(--dark-red);
    z-index: 100;
  }
  a {
    transition: var(--transition);
    padding: 0.4em;
    display: grid;
    place-items: center;
  }
  a:hover {
    transition: var(--transition);
    border-radius: 50%;
    background-color: var(--white-transparent);
    i {
      color: var(--dark-blue);
    }
  }
}
</style>
