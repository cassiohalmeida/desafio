<template>
  <div>
    <div class="weather">
      <div class="weather__logo">
        <img src="../assets/logo.svg" alt="Weather Logo">
      </div>
      <div class="weather__container">
        <card :show-humidity-and-pressure="key === 0" :card="card" v-for="(card, key) in getCards" v-bind:key="key"/>
      </div>
    </div>
    <div v-if="isLoading" class="weather__block">
      <img src="../assets/loader.svg" alt="Loading...">
    </div>
  </div>

</template>

<script>
import Card from './Card.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters(['getCards', 'isLoading'])
  },
  methods: {
    ...mapActions(['getData']),
    callApi () {
      this.getData()
      // Call this method again after 10 minutes
      setTimeout(this.callApi, 600000)
    }
  },
  created () {
    this.callApi()
  }
}
</script>

<style lang="scss">
@import '@/scss/components/_weather.scss';
</style>
