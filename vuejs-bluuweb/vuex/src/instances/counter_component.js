export default Vue.component('counter', {
    template: // html
    `<div>
        <p><em>1 + 1 = {{ zuma }}</em></p>
        <h1>Vuex counter: {{ number }}</h1>
        <buttons></buttons>

    </div>`,
    computed: {
        // Call the data store for use into this component... mapping store.state
        ...Vuex.mapState([
            'number'
        ]),
        zuma () {
            return 1 + 1
        }
    }
})