export default Vue.component('buttons', {
    template: // html
    `<div>
        <button class="btn btn-outline-primary btn-sm" @click="uping(3)">Up</button>
        <button class="btn btn-outline-dark btn-sm" @click="$store.commit('downing')">Down</button>
        <br>
        <!-- <small class="small text-muted">{{ $store.state.number }}</small> -->
        <small class="small text-muted">Number: {{ numberCounter }}</small>
    </div>`,
    computed: {
        numberCounter () {
            return this.$store.state.number
        }
    },
    methods: {
        ...Vuex.mapMutations(['uping'])
    }
})