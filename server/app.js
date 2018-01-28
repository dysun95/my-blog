const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dbConnect = require('./db/main')
const initRouter = require('./router/index')

const app = new Koa()
// 解析request.body 
app.use(bodyParser())
// 等待数据库连接成功
dbConnect().then(db => {
  console.log('DB connect succefully')
  app.use(initRouter(db).routes())
  app.listen(3000, () => {
    console.log('server run at 3000')
  })
}).catch(err => {
  console.error('fatal: DB connect fail', err)
})
// const router = new Router()

// router.get('/', (ctx) => {
//   console.log(ctx.request.body.aa)
//   ctx.body = ctx.request.body
// })
// app.use(koaStatic(path.join(__dirname, '../dist')))
// router.get('/*', async (ctx) => {
//   ctx.response.type = 'html'
//   ctx.body = await fs.createReadStream(path.join(__dirname, '../dist/index.html'))
// })
// app.use(router.routes())
