import Vue from 'vue'
import Vuex from 'vuex'
// Global state, mutations, getters and actions;
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
