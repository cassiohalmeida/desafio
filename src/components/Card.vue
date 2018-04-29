<template>
  <div class="card">
    <div class="card__title">
      {{cityName}}
    </div>
    <div class="card__temperature">
      <span>19<sup>°</sup></span>
    </div>
    <div class="card__humidity-and-pressure" v-if="showHumidityAndPressure">
      <div class="card__humidity">
        <span>HUMIDITY</span>
        <span>75%</span>
      </div>
      <div class="card__pressure">
        <span>PRESSURE</span>
        <span>892hPa</span>
      </div>
    </div>
    <div class="card__updated-at">
      Updated at 02:48:27 PM
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cityName: {
      type: String,
      required: true
    },
    showHumidityAndPressure: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/components/_card.scss";
</style>
