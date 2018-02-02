<template>
  <div class="editor">
    <div class="editor-container"></div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Quill from 'quill'
export default {
  mounted () {
    var quill = new Quill('.editor-container', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    })
  }
}
</script>

<style lang="less">
  @import url('quill/dist/quill.snow.css');
  .editor {
    display: inline-block;
    width: calc(~'100% - 100px');
    margin: 50px auto;
    background: rgba(255, 255, 255, 0.8);
    .editor-container {
      // display: inline-block;
      width: 100%;
      min-height: 500px;
    }
  }
</style>
