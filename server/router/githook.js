const Router = require('koa-router')
const router = new Router()

const util = require('util')
const execFile = util.promisify(require('child_process').execFile)

router.post('/git/hook', async (ctx) => {
  const { stdout } = await execFile('../../run.sh')
  console.log(stdout)
  ctx.body = {
    status: 200,
    data: stdout
  }
})

module.exports = router
