const Koa = require('koa')
const githook = require('./githook')

app.use(githook.routes())

app.listen(3001, () => {
  console.log('githook run at 3001')
})