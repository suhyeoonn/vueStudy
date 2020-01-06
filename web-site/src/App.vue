<template>
  <div id="app">
    <Menu></Menu>        
    <Main>
      <router-view></router-view>
    </Main>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'

var routes = [
    { path: '/main', component: Main }    
]

var router = new VueRouter({        
    routes
})

export default {
  name: 'app',
  components: {
    Menu, Main
  },
  router
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
