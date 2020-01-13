<template>
  <div id="app">
    <Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
//import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Menu
  }
}

</script>

<style>
* {
  box-sizing: inherit;
}
body {
  overflow-y: scroll;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    margin: 0;
    line-height: 1.57;
    word-wrap: break-word;
    word-break: break-all;
    text-align: justify;    
    font-size: 14px;
    color: #001b34;
}
#app {

}
</style>
