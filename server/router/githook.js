const Router = require('koa-router')
const router = new Router()

router.post('/git/hook', async (ctx) => {
  ctx.body = {
    status: 200
  }
})

module.exports = router
