<template>
  <div class="list">
    <div class="list-wrap">
      <div class="blog-wrap" v-for="(item, index) of blogList" :key="index" @click="getBlog(index)">
        <div class="title">{{item && item.title ? item.title : 'No title'}}</div>
        <div class="content" v-html="item && item.content ? item.content : '<p>No content</p>'"></div>
      </div>
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
  mounted () {
    getBlogList().then(res => {
      res = res.data
      if (res.status === 200) {
        this.blogList = res.data.list
        this.total = res.data.total
        
        this.$nextTick(() => {
          let blogWrapList = document.getElementsByClassName('blog-wrap')
          Array.prototype.forEach.call(blogWrapList, blogWrap => {
            console.log(blogWrap.clientHeight)
            blogWrap.imgList = blogWrap.getElementsByTagName('img')
            if (blogWrap.imgList.length > 0) {
              let imgSrc = blogWrap.imgList[0].src
              Array.prototype.forEach.call(blogWrap.imgList, img => {
                img.src = 'blank'
              })
              blogWrap.imgList[0].src = imgSrc
            }
          })
          console.log(blogWrapList[0])
        })
      } else {
        console.error(res.message)
      }
    }).catch(err => {
      console.error(err)
    })
  },
  methods: {
    getBlog (index) {
      this.$router.push('/detail/' + this.blogList[index].blogID)
    }
  }
}
</script>

<style lang="less">
  @contentWrapHeight: 153px;
  .list {
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
