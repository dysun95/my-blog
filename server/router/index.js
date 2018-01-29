const Router = require('koa-router')
const handler = require('../handler/index')
const token = require('./middleware/token')
const upload = require('./middleware/multer')

const router = new Router({
  prefix: '/api'
})

function initRouter (db) {
  router.post('/login', async function (ctx) {
    await handler.login(db, ctx)
  })

  router.post('/register', async function (ctx) {
    await handler.register(db, ctx)
  })

  router.get('/get/user', token, async function (ctx) {
    await handler.getUser(db, ctx)
  })

  router.post('/add/blog', token, async function (ctx) {
    await handler.addBlog(db, ctx)
  })

  router.get('/get/blogList', token, async function (ctx) {
    await handler.getBlogList(db, ctx)
  })

  router.get('/get/blog', token, async function (ctx) {
    await handler.getBlog(db, ctx)
  })

  router.post('/edit/blog', token, async function (ctx) {
    await handler.editBlog(db, ctx)
  })

  router.post('/upload/image', token)
  router.post('/upload/image', upload.single('image'), async ctx => {
    ctx.body = {
      status: 200,
      message: 'success',
      data: {
        name: ctx.req.file.filename
      }
    }
  })

  return router
}

module.exports = initRouter
