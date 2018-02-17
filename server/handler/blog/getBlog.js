const readBlog = require('../../db/read/blog')
const resHandler = require('../../util/response')

/**
 * 获取文章内容
 */
async function getBlog (db, ctx) {
  // let puid = ctx.cookies.get('puid') || ctx.query.puid || ctx.request.body.puid || ''
  let blogID = ctx.query.blogID
  if (!blogID) {
    resHandler(ctx, 4009)
    return
  }
  let queryArg = {
    blogID: blogID
  }
  let result = await readBlog(db, queryArg)
  if (result && result.blogID) {
    result._id = undefined
    result.originalContent = undefined
    resHandler(ctx, 200, result)
  } else {
    // 文章不存在
    resHandler(ctx, 4011)
  }
}

module.exports = getBlog
