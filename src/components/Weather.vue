<template>
  <div class="weather">
    <div class="weather__logo">
      <img src="../assets/logo.svg" alt="Weather Logo">
    </div>
    <div class="weather__container">
      <card></card>
      <card></card>
      <card></card>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  name: 'Weather',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/components/_weather.scss";
</style>
