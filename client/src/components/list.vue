<template>
  <div class="list">
    <div class="list-wrap">
      <div class="blog-wrap" v-for="(item, index) of blogList" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
import {getBlogList} from '../api/getBlogList'
export default {
  data () {
    return {
      blogList: [],
      total: 0
    }
  },
  created () {
    getBlogList().then(res => {
      res = res.data
      if (res.status === 200) {
        this.blogList = res.data.list
        this.total = res.data.total
      } else {
        console.error(res.message)
      }
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

<style lang="less">
  .list {
    text-align: center;
  }
</style>
