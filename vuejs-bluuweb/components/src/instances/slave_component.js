export default Vue.component('slavecom', {
    template: // html
    `<div>
        <p class="lead p-3 bg-danger text-white rounded">{{ message }}</p>
        <p class="p-3 bg-dark text-white rounded">Yes im your {{ title }}, {{ mastername }}</p>
        <input type="text" class="form-control form-control-sm" v-model="title">
    </div>`,
    data () {
        return {
            title: 'slavecom'
        }
    },
    props: [
        'mastername',
        'message'
    ],
    mounted () {
        return this.$emit('mySlaveName', this.title)
    }
})
