// import { mapState } from 'vuex'

import counter from './instances/counter_component'
import buttons from './instances/buttons_component'
import people from './instances/people_component'

Vue.use(Vuex)

// Global for all components
const store = new Vuex.Store({
    // Data
    state: {
        number: 1,
        people: []
    },

    // Methods
    mutations: {
        uping (state, n = 1) {
            state.number += n
        },
        downing () {
            this.state.number --
        },
        fillPeople (state, resultAction) {
            state.people = resultAction
        }
    },

    // Backend api
    actions: {
        getPeople: async function ({ commit }) {
            const response = await fetch('https://uinames.com/api/?amount=10&ext')
            const result = await response.json()
            commit('fillPeople', result)
        }
    }
})

new Vue({
    el: '#app',
    store // If not have same name, then "store: custom_store"
})