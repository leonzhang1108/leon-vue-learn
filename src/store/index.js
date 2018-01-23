import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {

  },
  plugins: [createLogger],
  modules: {
    app
  }
})

export default store
