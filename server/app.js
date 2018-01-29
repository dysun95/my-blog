const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dbConnect = require('./db/main')
const initRouter = require('./router/index')

const app = new Koa()
// 解析request.body 
app.use(bodyParser())
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
