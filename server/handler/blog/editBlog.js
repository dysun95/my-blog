const updateBlog = require('../../db/update/blog')
const resHandler = require('../../util/response')

async function editBlog (db, ctx) {
  let puid = ctx.cookies.get('puid') || ctx.query.puid || ctx.request.body.puid || ''
  let {blogID, title, content, originalContent} = ctx.request.body
  if (!(puid && blogID)) {
    resHandler(ctx, 4009)
    return
  }
  let queryArg = {
    blogID: blogID,
    author: puid
  }
  let updateInfo = {}
  if (title) {
    updateInfo.title = title
  } else if (content && originalContent) {
    updateInfo.content = content
    updateInfo.originalContent = originalContent
  } else {
    // 缺少文章参数
    resHandler(ctx, 4007)
    return
  }
  let result = await updateBlog(db, queryArg, updateInfo)
  if (result.result.ok === 1) {
    resHandler(ctx, 200, {
      blogID: blogID,
      author: puid
    })
  } else {
    // 更新失败
    resHandler(ctx, 4010)
  }
}

module.exports = editBlog
