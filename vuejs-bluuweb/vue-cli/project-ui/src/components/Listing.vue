<template>
    <div>
        <p><b>Click</b> left = increase / right = decrease</p>
        <ul class="list-group mb-3">
            <li v-for="(fruit, index) of sortFruits" :key="index" @click="increase(index)" @contextmenu.prevent="decrease(index)"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span>{{ fruit.name }}</span>
                <span class="badge badge-primary badge-pill">{{ fruit.count }}</span>
            </li>
        </ul>

        <button @click="reset()" :class="[ enableReset ? 'btn-primary' : 'btn-outline-primary disabled']" :disabled="!enableReset" class="btn" type="text">Reiniciar a cero</button>    
    </div>
</template>

<script>
import { mapState, mapMutations,mapActions } from 'vuex'

export default {
    name: 'listing',
    data () {
        return {
            enable: false
        }
    },
    computed: {
        ...mapState(['fruits']),
        sortFruits () {
            return this.fruits.sort( (a, b) => b.count - a.count ) 
        },
        enableReset () {
            return this.fruits.some( function (element) {
                return element.count > 0
            })
        }
    },
    methods: {
        ...mapMutations(['increase','decrease','reset'])
    }
}
</script>