import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    foods: []
  },
  getters: {
    getcount: (state) => (id) => {
      let selecd = state.foods.find((food) => food.id === id)
      if (selecd) {
        return selecd.count
      } else {
        return 0
      }     
    }
  },
  mutations: {
    add (state, food) {
      let type = state.foods.find((item) => item.id === food.id)
      if (type) {
        state.foods.map((item) => {
          if (item.id === food.id) {
            if (!item.count) {
              item.count = 0
            }
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
        if (item.id === food.id) {
          item.count -= 1
          if (item.count === 0) {
            state.foods.splice(index, 1)
          }   
        }
      })
    }
  }
})