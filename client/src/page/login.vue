<template>
  <div class="login">
    <div class="logo-wrap">
      <div class="logo"></div>
      <div class="text">MY BLOG</div>
    </div>
    <div class="input-wrap">
      <div class="input-filed">
        <input placeholder="username">
      </div>
      <div class="input-filed">
        <input placeholder="password">
      </div>
    </div>
    <div class="error-wrap"></div>
    <div class="button-wrap">
      <button class="submit">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  .login {
    width: 363px;
    // height: 500px;
    margin: 20vh auto 0;
    padding: 50px 0;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
  }
  .logo-wrap {
    margin-bottom: 40px;
    text-align: center;
    .logo {
      display: inline-block;
      width: 180px;
      height: 60px;
      margin: 0;
      margin-bottom: 6px;
      background: url('../assets/logo.png') no-repeat;
      background-size: auto 100%;
      background-position: 50% 50%;
    }
    .text {
      // font-size: 16px;
      color: #757c80;
    }
  }
  .input-wrap {
    text-align: center;
    .input-filed {
      margin: 0px auto;
      width: 300px;
      border: solid 1px #dfebf2;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      background: #fff;
      &:last-child {
        border-bottom: solid 1px #dfebf2;
      }
      input {
        display: block;
        width: 290px;
        height: 40px;
        line-height: 40px;
        padding: 0;
        padding-left: 10px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
      }
    }
  }
  .error-wrap {
    width: 300px;
    height: 12px;
    line-height: 12px;
    margin: 0 auto 3px;
    color: red;
    text-align: left;
  }
  .button-wrap {
    width: 300px;
    height: 40px;
    margin: 0 auto;
    button {
      display: block;
      width: 300px;
      height: 40px;
      line-height: 40px;
      margin: 0;
      padding: 0;
      border: none;
      border-radius: 4px;
      background-color: #25c6ff;
      color: #fff;
      font-size: 16px;
    }
  }
</style>
