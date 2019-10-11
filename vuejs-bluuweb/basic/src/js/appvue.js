// App vue 1
const app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Hello Vue!!',
        fruits: [
            {name: 'Apple', count: 3}, 
            {name: 'Orange', count: 0}, 
            {name: 'Watermelon', count: 5}, 
            {name: 'Banana', count: 7}
        ],
        new_fruit: null,
        count_fruits: 0,
        bg_color: true,
        message: 'This is a property',
        progress: 5,
        progressInterval: false
    },
    methods: {
        addFruit () {
            if( this.new_fruit === null )
                return false;

            this.fruits.push({
                name: this.new_fruit,
                count: 0
            })
            this.new_fruit = null
        },
        progressInc () {
            if( !this.progressInterval )
                return this.progressInterval = setInterval(() => this.progress++, 125)
        },
        progressDec () {
            if( !this.progressInterval )
                return this.progressInterval = setInterval(() => this.progress--, 125)
        },
        progressStop () {
            clearInterval( this.progressInterval )
            this.progressInterval = false
        }
    },
    computed: {
        color_progress () {
            return {
                'bg-success': this.progress <= 33,
                'bg-warning': this.progress > 33 && this.progress <= 66,
                'bg-danger': this.progress > 66
            };
        },
        reverse_message () {
            return this.message.split('').reverse().join('')
        },
        countFruits () {
            this.count_fruits = 0
            for(this.fruit of this.fruits)
            {
                this.count_fruits += this.fruit.count
            }
            return this.count_fruits
        }
    }
})

// App vue 2
const app2 = new Vue({
    el: '#app2',
    data: {
        tasks: [],
        new_task: null
    },
    created: function () {
        let dataLocal = JSON.parse( localStorage.getItem('tasks-vue') )

        if( dataLocal != null)
            this.tasks = dataLocal
    },
    methods: {
        addTask: function () {
            this.tasks.push({
                id: this.tasks.length + 1,
                text: this.new_task,
                state: false
            })
            this.new_task = null
        },
        completedTask: function (ix) {
            this.tasks[ix].state = true
            setLocalStorage( this.tasks )
        },
        pendingTask: function (ix) {
            this.tasks[ix].state = false
            setLocalStorage( this.tasks )
        },
        deleteTask: function (ix) {
            this.tasks.splice(ix, 1)
        }
    },
    watch: {
        tasks: function (){
            setLocalStorage( this.tasks )
        }
    }
})

function setLocalStorage( values )
{
    localStorage.setItem('tasks-vue', JSON.stringify( values ))
    return true
}


const app3 = new Vue({
    beforeCreate: function ()
    {
        console.log('beforeCreate: When only instance Vue "new Vue()", there not config of object')
    },
    created: function ()
    {
        console.log('Created: Read all data, methods, computed... config of object')
    },
    beforeMount: function ()
    {
        console.log('beforeMount: Before insert or render on DOM')
    },
    mounted: function ()
    {
        console.log('Mounted: Inserted on DOM, is visible')
    },
    beforeUpdate: function ()
    {
        console.log('beforeUpdate: When it detects a change in the config object')
    },
    updated: function ()
    {
        console.log('Updated: When a change was made to the config object')
    },
    beforeDestroy: function ()
    {
        console.log('beforeDestroy: When the instance is detected, its will be destroyed')
    },
    destroyed: function ()
    {
        console.log('Destroyed: When the instance was destroyed')
    },
    el: '#app3',
    data: {
        message: 'Cycle life of VueJs'
    },
    methods: {
        destroyInstance () {
            return this.$destroy()
        }
    }
})

export {
    app1,
    app2,
    app3
};