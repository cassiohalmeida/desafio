<template>
  <div class="weather">
    <div class="weather__logo">
      <img src="../assets/logo.svg" alt="Weather Logo">
    </div>
    <div class="weather__container">
      <card :city-name="'Nuuk, GL'"></card>
      <card :show-humidity-and-pressure="true" :city-name="'Urubici, BR'"></card>
      <card :city-name="'Nairobi, KE'"></card>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
  @import "@/scss/components/_weather.scss";
</style>
