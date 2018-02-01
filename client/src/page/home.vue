<template>
  <div class="home">
    <div class="header"></div>
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
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
    }
    .body {
      width: calc(~'100% - 300px');
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.1);
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
