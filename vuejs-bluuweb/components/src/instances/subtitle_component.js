const subtitle_component = Vue.component('subtitle', {
    // html this tag is of plugin es6-string-html
    template: // html
     `<div>
        <h2>{{ subtitle_text }}</h2>
        <h3>{{ lorem }}</h3>
    </div>`,
    data () {
        return {
            subtitle_text: 'Subtitle component',
            lorem: 'lorem lorem lorem component'
        }
    }
})

export {
    subtitle_component
}