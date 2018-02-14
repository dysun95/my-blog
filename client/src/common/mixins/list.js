export default {
  data () {
    return {
      blogList: [],
      total: 0
    }
  },
  methods: {
    getBlog (index) {
      this.$router.push('/detail/' + this.blogList[index].blogID)
    },
    hideImage () {
      let blogWrapList = document.getElementsByClassName('blog-wrap')
      Array.prototype.forEach.call(blogWrapList, blogWrap => {
        blogWrap.imgList = blogWrap.getElementsByTagName('img')
        if (blogWrap.imgList.length > 0) {
          let imgSrc = blogWrap.imgList[0].src
          Array.prototype.forEach.call(blogWrap.imgList, img => {
            img.src = 'blank'
          })
          blogWrap.imgList[0].src = imgSrc
        }
      })
    }
  }
}
