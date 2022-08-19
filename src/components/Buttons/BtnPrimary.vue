<template>
  <div v-if="useRoute">
    <router-link to="/about">
      <button class="btn">
        <span>{{ name }}</span>
        <span>{{ name }}</span>
        <i :class="icon"> </i>
      </button>
    </router-link>
    <router-view />
  </div>
  <div v-else>
    <a :href="href" target="_blank">
      <button class="btn">
        <span>{{ name }}</span>
        <span>{{ name }}</span>
        <i :class="icon"> </i>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "BtnPrimary",
  props: {
    name: String,
    icon: String,
    href: String,
    useRoute: Boolean,
  },
};
</script>
