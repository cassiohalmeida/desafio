<template>
  <div class="card">
    <div class="card__title">
      {{card.name}}, {{card.sys.country}}
    </div>
    <div :class="['card__temperature', {
      'card__temperature--cold' : isCold,
      'card__temperature--medium' : isMedium,
      'card__temperature--hot' : isHot
     }]">
      <span>{{getTemperature}}<sup>°</sup></span>
    </div>
    <div class="card__humidity-and-pressure" v-if="showHumidityAndPressure">
      <div class="card__humidity">
        <span>HUMIDITY</span>
        <span v-html="getHumidity"></span>
      </div>
      <div class="card__pressure">
        <span>PRESSURE</span>
        <span v-html="getPressure"></span>
      </div>
    </div>
    <div class="card__updated-at">
      Updated at {{ getUpdatedAtTime }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    showHumidityAndPressure: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['getUpdatedAtTime']),
    getTemperature () {
      return Math.round(this.card.main.temp)
    },
    getHumidity () {
      return this.card.main.humidity + '%'
    },
    getPressure () {
      return Math.round(this.card.main.pressure) + '<i>hPa</i>'
    },
    isCold () {
      return this.card.main.temp <= 5
    },
    isMedium () {
      return this.card.main.temp >= 6 && this.card.main.temp <= 25
    },
    isHot () {
      return this.card.main.temp >= 26
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/components/_card.scss';
</style>
