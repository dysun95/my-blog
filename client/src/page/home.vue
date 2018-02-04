<template>
  <div class="home">
    <div class="header">
      <div class="logo"></div>
      <div class="text">Write my life</div>
      <div class="button">Sign out</div>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
    <div class="background-image"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
  .home {
    width: 100%;
    // background: #000;
    .header, .footer {
      width: 100%;
      height: 60px;
      background: rgba(255, 255, 255, 0.7);
    }
    .header {
      .logo, .text, .button {
        display: inline-block;
        height: 60px;
        line-height: 60px;
      }
      .logo {
        // height: 40px;
        width: 90px;
        background: url('../assets/logo.png') no-repeat;
        background-size: auto 66%;
        background-position: 50% 50%;
        vertical-align: text-top;
      }
      .text {
        font-size: 30px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        vertical-align: text-top;
        color: #555;
      }
      .button {
        float: right;
        margin-right: 20px;
        font-size: 25px;
        color: #666;
        cursor: pointer;
      }
    }
    .body {
      width: 100%;
      background: rgba(255, 255, 255, 0.8);
      text-align: center;
    }
    // .footer {
    //   fix
    //   bottom: 0;
    // }
    .background-image {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url('../assets/bg_01.jpg') no-repeat;
      background-size: cover;
      background-position: 50% 0;
      z-index: -1;
      filter: blur(2px);
    }
  }
</style>
