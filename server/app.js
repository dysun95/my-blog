const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
// const koaStatic = require('koa-static')
// const path = require('path')
// const fs = require('fs')

const app = new Koa()
const router = new Router()
// app.use(koaStatic(path.join(__dirname, '../dist')))
// router.get('/*', async (ctx) => {
//   ctx.response.type = 'html'
//   ctx.body = await fs.createReadStream(path.join(__dirname, '../dist/index.html'))
// })
// app.use(router.routes())

app.listen(9999)
