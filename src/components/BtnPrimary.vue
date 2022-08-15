<template>
  <a href="https://google.com">
    <button class="btn">
      <span>{{ name }}</span>
      <span>{{ name }}</span>

      <i :class="icon"> </i>
    </button>
  </a>
</template>

<script>
export default {
  name: "BtnPrimary",
  props: {
    name: String,
    icon: String,
  },
};
</script>
