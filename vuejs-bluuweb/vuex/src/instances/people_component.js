export default Vue.component('people', {
    template: // html
    `<div>
        <button class="btn btn-primary mb-3" @click="getPeople()">Get people API</button>
        <ul class="list-group">
            <li v-for="(person, index) of people" :key="index" class="list-group-item list-group-item-action d-flex justify-content-left align-items-center">
                <img :src="person.photo" class="img-thumbnail rounded-circle" style="width:64px">
                <span class="mx-3">{{ person.name }} {{ person.surname }}</span>
                <span>{{ person.region }}</span>
            </li>
        </ul>
    </div>`,
    computed: {
        ...Vuex.mapState(['people'])
    },
    methods: {
        ...Vuex.mapMutations(['fillPeople']),
        ...Vuex.mapActions(['getPeople']),
    }
})