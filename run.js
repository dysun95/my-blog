const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const githook = require('./githook')

const app = new Koa()
app.use(bodyParser())
app.use(githook.routes())

app.listen(3001, () => {
  console.log('githook run at 3001')
})