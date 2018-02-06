const readBlogList = require('../../db/read/blogList')
const resHandler = require('../../util/response')

async function getBlogList (db, ctx) {
  let puid = ctx.cookies.get('puid') || ctx.query.puid || ctx.request.body.puid || ''
  if (!puid) {
    resHandler(ctx, 4009)
    return
  }
  let blog = {
    'author': puid
  }
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

module.exports = getBlogList
