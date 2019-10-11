const progressbar = Vue.component('progressbar', {
    // html this tag is of plugin es6-string-html
    template: // html
     `<div>
        <div class="progress mb-1">
            <div class="progress-bar" role="progressbar" :style="{'width': progress_count + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{ progress_count }}%</div>
        </div>
        <button class="btn btn-success btn-sm" @click="increment">+5</button>
        <button class="btn btn-danger btn-sm" @click="decrement">-5</button>
    </div>`,
    data () {
        return {
            progress_count: 50,
        }
    },
    methods: {
        increment () {
            return this.progress_count += 5;
        },
        decrement () {
            return this.progress_count -= 5;
        }
    }
})

export {
    progressbar
}