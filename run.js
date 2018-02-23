const Koa = require('koa')
const app = new Koa()
const githook = require('./githook')

app.use(githook.routes())

app.listen(3001, () => {
  console.log('githook run at 3001')
})