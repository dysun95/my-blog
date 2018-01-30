<template>
  <div class="login">
    <div class="logo-wrap"></div>
    <div class="input-wrap"></div>
    <div class="button-wrap"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
  .login {
    width: 363px;
    margin: 20vh auto 0;
    padding: 50px 0;
    background-color: #fff;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
  }
</style>
