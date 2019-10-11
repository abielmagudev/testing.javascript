<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <heading></heading>
    <listing></listing>
  </div>
</template>

<script>
import Heading from './components/Heading.vue'
import Listing from './components/Listing.vue'

export default {
  name: 'app',
  components: {
    Heading,
    Listing
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
