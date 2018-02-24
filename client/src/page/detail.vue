<template>
  <div class="detail">
    <div class="title">{{blog.title}}</div>
    <hr>
    <div class="content" v-html="blog.content"></div>
    <div class="remove" v-if="isAuthor" @click="remove">删除</div>
    <confirm v-if="confirmVisiable" @confirm="confirmRemove" @cancel="confirmVisiable = false" @close="confirmVisiable = false"></confirm>
  </div>
</template>

<script>
import { getBlog } from '../api/getBlog'
import { removeBlog } from '../api/removeBlog'
import confirm from '../components/confirm.vue'
import toastr from '../common/toastr'
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      blog: {},
      confirmVisiable: false,
      isAuthor: false
    }
  },
  mounted () {
    let blogID = this.$route.params.blogID
    if (blogID) {
      getBlog({
        blogID: blogID
      }).then(res => {
        res = res.data
        this.blog = res.data
        if (Cookies.get('puid') === this.blog.author) {
          this.isAuthor = true
        }
      }).catch(err => {
        console.error(err)
      })
    }
  },
  methods: {
    remove () {
      this.confirmVisiable = true
    },
    confirmRemove () {
      let {blogID} = this.blog
      removeBlog({'blogID': blogID}).then(res => {
        res = res.data
        if (res.status === 200) {
          toastr.success('Delete Success')
          this.$router.push('/home')
        } else {
          toastr.error('Delete failed')
          this.confirmVisiable = false
        }
      }).catch(err => {
        toastr.error('Delete failed')
        this.confirmVisiable = false
        console.log(err)
      })
    }
  },
  components: {
    confirm
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
    .remove {
      width: 80px;
      height: 40px;
      line-height: 40px;
      margin: 20px 0 20px auto;
      background: red;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
