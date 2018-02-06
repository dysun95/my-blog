<template>
  <div class="detail">
    <div class="title">{{blog.title}}</div>
    <hr>
    <div class="content" v-html="blog.content"></div>
  </div>
</template>

<script>
import { getBlog } from '../api/getBlog'
export default {
  data () {
    return {
      blog: {}
    }
  },
  created () {
    let blogID = this.$route.params.blogID
    if (blogID) {
      getBlog({
        blogID: blogID
      }).then(res => {
        res = res.data
        this.blog = res.data
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="less">
  .detail {
    width: 70%;
    margin: 0 auto;
    overflow: hidden;
    .title {
      margin-top: 10px;
      font-size: 24px;
    }
    .content {
      text-align: left;
      margin: 0 20px;
      img {
        display: block;
        margin: 0 auto;
        width: 60%;
      }
      p {
        min-height: 30px;
        line-height: 30px;
        margin: 0;
      }
    }
  }
</style>
