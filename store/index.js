import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    city: null,
    nowCity: null
  },
  getters: {
    getCity (state) {
      return state.city
    },
    getNowCity (state) {
      return state.nowCity
    }
  },
  mutations: {
    setCity (state, item) {
      state.city = item
    },
    setNowCity (state, item) {
      state.nowCity = item
    }
  }
})

export default store
