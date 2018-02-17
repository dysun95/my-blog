<template>
  <div class="quill">
    <div class="quill-toolbar">
      <span class="ql-formats">
        <select class="ql-size">
          <option value="small"></option>
          <!-- Note a missing, thus falsy value, is used to reset to default -->
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
      </span>
      <!-- Add a bold button -->
      <span class="ql-formats">
        <button class="ql-bold" type="button"></button>
        <button class="ql-italic" type="button"></button>
        <button class="ql-underline" type="button"></button>
        <button class="ql-strike" type="button"></button>
      </span>
      <!-- Add subscript and superscript buttons -->
      <span class="ql-formats">
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
        <button class="ql-code-block"></button>
        <button class="ql-image"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        <select class="ql-color"></select>
        <select class="ql-background"></select>
      </span>
      <span class="ql-formats">
        <button class="ql-clean"></button>
      </span>
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
    quill.focus()
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
      let baseURL = 'https://api.dysun95.tk/image/'
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
    width: 50%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0);
    font-family: 'Sailec Light',sans-serif;
    .quill-toolbar {
      border-left-color: rgba(255, 255, 255, 0);
      border-right-color: rgba(255, 255, 255, 0);
    }
    .quill-container {
      width: calc(~'100% + 30px');
      margin-left: -15px;
      min-height: 500px;
      // padding: 0 50px;
      border-color: rgba(255, 255, 255, 0);
      box-sizing: border-box;
      cursor: text;
      font-size: 18px;
    }
  }
</style>
