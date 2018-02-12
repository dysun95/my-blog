<template>
  <div class="editor">
    <div class="title-wrap">
      <input type="text" class="title" placeholder="请输入文章标题" v-model="title">
    </div>
    <quill
    :originalContent="originalContent"
    @getHTMLContent="getHTMLContent"
    @getOriginalContent="getOriginalContent"></quill>
    <div class="button-save" @click="save">Save</div>
  </div>
</template>

<script>
import quill from '../components/quill'
import toastr from '../common/toastr'
import {createBlog} from '../api/createBlog'
export default {
  data () {
    return {
      title: '',
      originalContent: {},
      HTMLContent: ''
    }
  },
  methods: {
    getHTMLContent (content) {
      this.HTMLContent = content
    },
    getOriginalContent (content) {
      this.originalContent = content
    },
    save () {
      if (!this.title) {
        toastr.error('Title cannot be blank')
        return
      }
      if (!this.originalContent || !this.HTMLContent) {
        toastr.error('Content cannot be blank')
        return
      }
      createBlog({
        title: this.title,
        content: this.HTMLContent,
        originalContent: JSON.stringify(this.originalContent)
      }).then(res => {
        toastr.success('Saved Success')
        this.$router.push('/list')
      }).catch(err => {
        toastr.error('Something error')
        console.log(err)
      })
    }
  },
  components: {
    quill
  }
}
</script>

<style lang="less">
.editor {
  .title-wrap {
    width: 50%;
    margin: 0 auto;
    padding: 30px 0 20px;
    .title {
      display: inline-block;
      width: 100%;
      height: 30px;
      padding: 0;
      padding-left: 10px;
      box-sizing: border-box;
      border: none;
      // border-bottom: 1px solid #ccc;
      outline: none;
      background-color: rgba(255, 255, 255, 0);
      font-size: 20px;
      color: #666;
    }
  }
  .button-save {
    height: 40px;
    line-height: 40px;
    width: 100px;
    margin: 0 auto;
    padding-top: 20px;
    cursor: pointer;
  }
}
</style>
