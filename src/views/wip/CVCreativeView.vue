<template>
  <CVCreative :user-data="userData" />
</template>

<script>
import { store } from "@/store/store.js";
import CVCreative from "@/components/templates/CVCreative.vue";
export default {
  name: "CVCreativeView",
  components: {
    CVCreative,
  },
  computed: {
    userData() {
      return store.getUserData();
    },
  },
};
</script>

<style>
* {
  font-size: 16px;
}
</style>
>
