import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: []
  },
  getters: {
    getcount: (state) => (id) => {
      let selecd = state.foods.find((food) => food.name === id)
      if (selecd) {
        return selecd.count
      } else {
        return 0
      }     
    }
  },
  mutations: {
    add (state, food) {
      let type = state.foods.find((item) => item.name === food.name)
      if (type) {
        state.foods.map((item) => {
          if (item.name === food.name) {
            item.count += 1
          }
        })
      } else {
        food.count = 1
        state.foods.push(food)
      }
    },
    minus (state, food) {
      state.foods.map((item, index) => {
        if (item.name === food.name) {
          item.count -= 1
          if (item.count === 0) {
            state.foods.splice(index, 1)
          }      
        }
      })
    }
  }
})