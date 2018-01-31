<template>
  <div id="app">
    <div class="background-image"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100%; */
  .background-image {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: url('./assets/bg_01.jpg') no-repeat;
    background-size: cover;
    background-position: 50% 0;
    z-index: -1;
  }
}
</style>
