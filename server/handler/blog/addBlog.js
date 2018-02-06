const createBlog = require('../../db/create/blog')
const updateBlog = require('../../db/update/blog')
const resHandler = require('../../util/response')

/**
 * 增加文章，生成时间戳、blogID和作者
 */
async function addBlog (db, ctx) {
  let {title, content, originalContent} = ctx.request.body
  let blog = {
    title: title,
    content: content,
    originalContent: originalContent
  }
  let puid = ctx.cookies.get('puid') || ctx.query.puid || ctx.request.body.puid || ''
  blog.author = puid
  blog.createTime = Date.now()
  if (blog.title && blog.content && blog.author) {
    let result = await createBlog(db, blog)
    if (result.result && result.result.ok === 1) {
      let blogNew = result.ops[0]
      let blogID = blogNew._id.toString()
      result = await updateBlog(db, {'_id': blogNew._id}, {'blogID': blogID})
      if (result.result.ok === 1) {
        resHandler(ctx, 200, {
          blogID: blogID,
          title: blogNew.title,
          author: blogNew.author
        })
      } else {
        resHandler(ctx, 5000)
      }
    } else {
      resHandler(ctx, 5000)
    }
  } else {
    resHandler(ctx, 4007)
  }
}

module.exports = addBlog
