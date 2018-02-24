const deleteBlog = require('../../db/delete/blog')
const resHandler = require('../../util/response')

async function removeBlog (db, ctx) {
  let puid = ctx.cookies.get('puid') || ctx.query.puid || ctx.request.body.puid || ''
  let {blogID} = ctx.request.body
  if (!(puid && blogID)) {
    resHandler(ctx, 4009)
    return
  }
  let queryArg = {
    blogID: blogID,
    author: puid
  }
  let result = await deleteBlog(db, queryArg)
  if (result.result.ok === 1) {
    resHandler(ctx, 200, {
      blogID: blogID,
      author: puid
    })
  } else {
    // 删除失败
    resHandler(ctx, 4012)
  }
}

module.exports = removeBlog
