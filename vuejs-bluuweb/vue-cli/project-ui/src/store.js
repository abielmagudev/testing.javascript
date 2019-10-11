import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      {name: 'Naranja', count: 0},
      {name: 'Manzana', count: 0},
      {name: 'Sandia', count: 0},
      {name: 'Pera', count: 0},
      {name: 'Durazno', count: 0}
    ]
  },
  mutations: {
    increase (state, index) {
      return state.fruits[index].count ++
    },
    decrease (state, index) {
      if ( state.fruits[index].count > 0 ) 
        return state.fruits[index].count --
    },
    reset (state) {
      return state.fruits.forEach( (item, index) => item.count = 0 )
    }
  },
  actions: {

  }
})
