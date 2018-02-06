const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const dbConnect = require('./db/main')
const initRouter = require('./router/index')
const allowOrigin = require('./config/allowOrigin')
const koaStatic = require('koa-static')
const path = require('path')

const app = new Koa()

app.use(cors({
  origin: (ctx) => {
    console.log(ctx.header.origin)
    if (allowOrigin.indexOf(ctx.header.origin) !== -1) {
      return ctx.header.origin
    }
    return false
  },
  credentials: true
}))

// 解析request.body 
app.use(bodyParser())

app.use(koaStatic(path.join(__dirname, '../uploads')))
// 数据库连接
dbConnect().then(db => {
  console.log('DB connect succefully')
  app.use(initRouter(db).routes())
  app.listen(3000, () => {
    console.log('server run at 3000')
  })
}).catch(err => {
  console.error('fatal: DB connect fail', err)
})
