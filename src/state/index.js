import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [],
    ballShow: false,
    rect: {
      x: 0,
      y: 0
    }
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
      state.ballShow = true
      state.rect.x = food.rect.left 
      state.rect.y = food.rect.top
      let type = state.foods.find((item) => item.id === food.food.id)
      if (type) {
        state.foods.map((item) => {
          if (item.id === food.food.id) {
            item.count += 1
          }
        })
      } else {
        food.food.count = 1
        state.foods.push(food.food)
      }
    },
    minus (state, food) {
      state.foods.map((item, index) => {
        if (item.id === food.id) {
          item.count -= 1
          if (item.count === 0) {
            state.foods.splice(index, 1)
          }   
          return true   
        }
      })
    },
    ballHide (state) {
      state.ballShow = false
    }
  }
})