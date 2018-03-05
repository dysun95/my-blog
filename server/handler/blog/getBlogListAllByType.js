const readBlogList = require('../../db/read/blogList')
const resHandler = require('../../util/response')

async function getBlogListAllByType (db, ctx) {
  let blogType = ctx.query.type
  let blog = {
    remove: 0
  }
  if (blogType) {
    blog.type = blogType
  }
  console.log(blogType)
  let result = await readBlogList(db, blog)
  if (result && result.length >= 0) {
    let length = result.length
    for (let i = 0; i < length; i++) {
      // 去除_id属性
      result[i]._id = undefined
      result[i].originalContent = undefined
    }
    resHandler(ctx, 200, {
      list: result,
      total: length
    })
  } else {
    resHandler(ctx, 4008)
  }
}

module.exports = getBlogListAllByType
