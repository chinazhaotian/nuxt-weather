import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    city: null,
    nowCity: null,
    maskShow: true
  },
  getters: {
    getCity (state) {
      return state.city
    },
    getNowCity (state) {
      return state.nowCity
    },
    getMask (state) {
      return state.maskShow
    }
  },
  mutations: {
    setCity (state, item) {
      state.city = item
    },
    setNowCity (state, item) {
      state.nowCity = item
    },
    setMask (state, item) {
      state.maskShow = item
    }
  }
})

export default store
