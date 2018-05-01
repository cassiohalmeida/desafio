import axios from 'axios'
import lscache from 'lscache'
import moment from 'moment'
export default {
  getData (context) {
    // Check if there is a cache in the localStorage
    if (lscache.get('desafio-conta-azul')) {
      context.commit('pushCardsToState', lscache.get('desafio-conta-azul'))
      context.commit(
        'setUpdatedAtTime',
        lscache.get('desafio-conta-azul-updated-at')
      )
      return
    }
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/group?id=3445709,3421319,184745&APPID=40c5bfa2a84c28ed91bda7dc2825dfba&units=metric'
      )
      .then(response => {
        // Cache it in the localStorage for 10 minutes.
        lscache.set('desafio-conta-azul', response.data, 10)
        context.commit('pushCardsToState', response.data)
        // Set the update at when we call the API
        lscache.set(
          'desafio-conta-azul-updated-at',
          moment().format('hh:mm:ss A')
        )
        context.commit('setUpdatedAtTime', moment().format('hh:mm:ss A'))
      })
  }
}
