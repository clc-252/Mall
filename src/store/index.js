import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as user from './modules/user'
import * as order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    order
  },
  plugins: [createPersistedState()]
})
