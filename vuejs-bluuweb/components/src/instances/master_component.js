import Slavecom from './slave_component'

export default Vue.component('mastercom', {
    template: // html
    `<div>
        <div class="jumbotron">
            <p class="lead text-muted text-center">Data between master & slave components</p>
            <br>
            <input type="text" class="form-control form-control-lg mb-3" v-model="title" placeholder="Set name master">
            <label>Slave name: {{ nameSlave }}</label>
            <slavecom :mastername="title" message="Your are my slave!" @mySlaveName="nameSlave = $event"></slavecom>
        </div>
    </div>`,
    data () {
        return {
            title: 'Mastercom',
            nameSlave: ''
        }
    }
})
