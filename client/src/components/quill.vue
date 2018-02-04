<template>
  <div class="quill">
    <div class="quill-container" ref="quill"></div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Quill from 'quill'
export default {
  props: {
    content: {
      type: String,
      default: '<p>222</p>'
    }
  },
  data () {
    return {
      quill: null
    }
  },
  mounted () {
    var quill = new Quill('.quill-container', {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['clean']
        ]
      },
      placeholder: 'Write something...',
      theme: 'snow'
    })
    quill.clipboard.dangerouslyPasteHTML(this.content)
    quill.setSelection(quill.getLength(), 0)
    let _this = this
    quill.on('text-change', function (delta, oldDelta, source) {
      _this.getContent()
    })
    this.quill = quill
  },
  methods: {
    getContent () {
      let container = this.quill.container
      let editor = container.getElementsByClassName('ql-editor')[0]
      this.$emit('getContent', editor.innerHTML)
    }
    // setContent () {
    //   this.quill.clipboard.dangerouslyPasteHTML('<p>wd</p><p>sda</p><p>asd</p><p>asd</p><p>ad</p><p>as</p><p>da</p><p>d</p>')
    //   this.quill.setSelection(this.quill.getLength(), 0)
    // }
  }
}
</script>

<style lang="less">
  @import url('quill/dist/quill.snow.css');
  .quill {
    display: inline-block;
    width: 60%;
    margin: 50px auto;
    background: rgba(255, 255, 255, 0.8);
    .quill-container {
      // display: inline-block;
      width: 100%;
      min-height: 500px;
    }
  }
</style>
