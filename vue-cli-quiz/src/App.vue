<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Links/>
    <Plugins/>
    <Ecosystem/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Links from './components/Links.vue'
import Plugins from './components/Plugins.vue'
import Ecosystem from './components/Ecosystem'

//es6 문법
export default {
  name: 'app',
  components: {
    HelloWorld,
    Links,
    Plugins: Plugins,
    Ecosystem: Ecosystem
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
  margin-top: 60px;
}
</style>
