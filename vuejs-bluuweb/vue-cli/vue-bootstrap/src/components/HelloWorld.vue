<template>
  <div class="hello">
    <div class="text-center">
      <h1>{{ msg }}</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <b-button target="_blank" href="https://cli.vuejs.org" variant="danger" size="sm">vue-cli documentation</b-button>
      </p>
    </div>

    <b-row>

      <b-col>
        <b-card title="Installed CLI Plugins" sub-title="Card subtitle">
        <b-card-text>
          <ul>
            <li>
              <b-button pill variant="outline-warning" href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</b-button>
            </li>
          </ul>
        </b-card-text>
        </b-card>
      </b-col>

      <b-col>
        <h3>Essential Links</h3>
        <ul>
          <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
          <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
      </b-col>

      <b-col>
        <h3>Ecosystem</h3>
        <ul>
          <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
          <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
          <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
          <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
      </b-col>
    </b-row>

    <form>
      <b-form-group>
        <b-form-input type="text" v-model="text"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input type="text" v-model="text" :state="true"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input type="text"  v-model="text" :state="false"></b-form-input>
      </b-form-group>
    </form>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      text: 'Text like a value'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
-->