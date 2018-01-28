const Router = require('koa-router')
const handler = require('../handler/index')
const token = require('./middleware/token')
const upload = require('./middleware/multer')

const router = new Router({
  prefix: '/api'
})

function initRouter(db) {
  router.post('/login', async function (ctx) {
    console.log(ctx.response)
    await handler.login(db, ctx)
  })

  router.post('/register', async function (ctx) {
    await handler.register(db, ctx)
  })

  // router.get('/get/user', token, function (req, res) {
  //   handler.getUser(req, res)
  // })

  // router.post('/add/blog', token, function (req, res) {
  //   handler.addBlog(req, res)
  // })

  // router.get('/get/blogList', token, function (req, res) {
  //   handler.getBlogList(req, res)
  // })

  // router.get('/get/blog', token, function (req, res) {
  //   handler.getBlog(req, res)
  // })

  // router.post('/edit/blog', token, function (req, res) {
  //   handler.editBlog(req, res)
  // })

  router.post('/upload/image', token)
  router.post('/upload/image', upload.single('image'))

  return router
}

module.exports = initRouter
