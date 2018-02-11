<template>
  <div class="quill">
    <div class="quill-toolbar">
      <select class="ql-size">
        <option value="small"></option>
        <!-- Note a missing, thus falsy value, is used to reset to default -->
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <!-- Add a bold button -->
      <button class="ql-bold"></button>
      <!-- Add subscript and superscript buttons -->
      <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>
      <button class="ql-code-block"></button>
      <button class="ql-image"></button>
    </div>
    <div class="quill-container" ref="quill"></div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import '@/assets/styles/default.css'
import '../common/highlight.pack'
import Quill from 'quill'
import { upload } from '../api/upload'
export default {
  props: {
    originalContent: Object
  },
  data () {
    return {
      quill: null,
      maxSize: 4
    }
  },
  mounted () {
    window.hljs.initHighlightingOnLoad()
    var quill = new Quill('.quill-container', {
      modules: {
        syntax: true,
        toolbar: {
          container: '.quill-toolbar',
          handlers: {
            'image': () => {
              this.imageClick()
            }
          }
        }
      },
      placeholder: '',
      theme: 'snow'
    })
    // quill.clipboard.dangerouslyPasteHTML(this.content)
    quill.setContents(this.originalContent)
    quill.setSelection(quill.getLength(), 0)
    let _this = this
    quill.on('text-change', function (delta, oldDelta, source) {
      _this.getHTMLContent()
      _this.getOriginalContent()
    })
    this.$refs.quill.addEventListener('click', function () {
      quill.focus()
    })
    this.quill = quill
  },
  computed: {
    editor () {
      return this.quill.container.getElementsByClassName('ql-editor')[0]
    }
  },
  methods: {
    getHTMLContent () {
      this.$emit('getHTMLContent', this.editor.innerHTML)
    },
    getOriginalContent () {
      this.$emit('getOriginalContent', this.quill.getContents())
    },
    imageClick () {
      let input = document.createElement('input')
      input.type = 'file'
      input.name = this.fileName
      input.accept = 'image/jpeg, image/png, image/jpg, image/gif'
      input.onchange = this.onFileChange
      input.click()
    },
    onFileChange (e) {
      let baseURL = 'http://local.dysun95.tk:3000/image/'
      let fileInput = e.target
      if (fileInput.files.length === 0) {
        return
      }
      if (fileInput.files[0].size > 1024 * 1024 * this.maxSize) {
        alert('图片过大')
        return
      }
      let data = new FormData()
      data.append('image', fileInput.files[0])
      upload(data).then(res => {
        res = res.data
        this.quill.insertEmbed(this.quill.getSelection().index, 'image', baseURL + res.data.name)
        this.quill.setSelection(this.quill.getSelection().index + 1)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="less">
  @import url('quill/dist/quill.snow.css');
  .quill {
    display: inline-block;
    width: 60%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.6);
    font-family: 'Sailec Light',sans-serif;
    .quill-container {
      width: 100%;
      min-height: 500px;
      cursor: text;
    }
  }
</style>
