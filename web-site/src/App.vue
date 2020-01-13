<template>
  <div id="app">
    <Menu/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
.fade-enter-active {
    transition: all 1s;
}
.fade-enter {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}
</style>
