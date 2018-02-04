<template>
  <div class="editor">
    <quill
    :content="content"
    @getContent="getContent"></quill>
    <div>Save</div>
  </div>
</template>

<script>
import quill from '../components/quill'
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    getContent (content) {
      this.content = content
      console.log(this.content)
    }
  },
  components: {
    quill
  }
}
</script>
