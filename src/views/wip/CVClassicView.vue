<template>
  <CVClassic :user-data="userData" />
</template>

<script>
import { store } from "@/store/store.js";
import CVClassic from "@/components/templates/CVClassic.vue";
export default {
  name: "CVClassicView",
  components: {
    CVClassic,
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
  font-size: 15px;
}
</style>
