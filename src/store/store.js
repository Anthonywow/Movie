import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  mutationsAddCount (state, n = 0) {
    return (state.count += n)
  },
  mutationsReduceCount (state, n = 0) {
    return (state.count -= n)
  }
}

const actions = {
  actionsAddCount (context, n) {
    console.log(n)
    return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount (context, n) {
    console.log(n)
    return context.commit('mutationsReduceCount', n)
  }
}

const getters = {
  getterCount (state) {
    return (state.count += 5)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
