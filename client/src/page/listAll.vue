<template>
<div class="home">
    <div class="header">
      <div class="logo" @click="goList"></div>
      <div class="text" @click="goWrite">Write my life</div>
      <div class="button" @click="signIn">Sign in</div>
    </div>
    <div class="body">
      <div class="list-all">
        <div class="list-wrap">
          <div class="blog-wrap" v-for="(item, index) of blogList" :key="index" @click="getBlog(index)">
            <div class="title">{{item && item.title ? item.title : 'No title'}}</div>
            <div class="content" v-html="item && item.content ? item.content : '<p>No content</p>'"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
    <div class="background-image"></div>
  </div>
</template>

<script>
import {getBlogListAll} from '../api/getBlogList'
import home from '../common/mixins/home'
import listAll from '../common/mixins/list'
export default {
  mixins: [home, listAll],
  mounted () {
    getBlogListAll().then(res => {
      res = res.data
      if (res.status === 200) {
        this.blogList = res.data.list
        this.total = res.data.total
        
        this.$nextTick(() => {
          this.hideImage()
        })
      } else {
        console.error(res.message)
      }
    }).catch(err => {
      console.error(err)
    })
  },
  methods: {
    signIn () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">
  .home {
    width: 100%;
    height: 100%;
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
        cursor: pointer;
      }
      .text {
        font-size: 30px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        vertical-align: text-top;
        color: #555;
        cursor: pointer;
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
      width: calc(~'100% - 240px');
      min-height: calc(~'100% - 120px');
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.4);
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
      background: #e4e7ee;
      // background: url('../assets/bg_01.jpg') no-repeat;
      // background-size: cover;
      // background-position: 50% 0;
      z-index: -1;
      // filter: blur(2px);
    }
  }

  @contentWrapHeight: 153px;
  .list-all {
    position: relative;
    width: 60%;
    margin: auto;
    text-align: left;
    overflow: hidden;
    .list-wrap {
      position: relative;
      left: -40px;
      margin: 10px 0;
      .blog-wrap {
        width: 80%;
        margin: 20px auto;
        height: @contentWrapHeight;
        background: rgba(255, 255, 255, .8);
        border-radius: 4px;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        .title {
          height: 26px;
          line-height: 26px;
          padding-top: 5px;
          padding-left: 15px;
          font-size: 20px;
          font-weight: bold;
        }
        .content {
          height: @contentWrapHeight - 31px - 3px;
          padding-top: 3px;
          padding-left: 20px;
          font-size: 14px;
          overflow: hidden;
          p {
            margin: 0;
          }
          img {
            display: block;
            width: 60%;
          }
        }
      }
    }
  }
</style>
