const Router = require('koa-router')
const router = new Router()

const util = require('util')
const execFile = util.promisify(require('child_process').execFile)

router.post('/git/hook', async (ctx) => {
  if (ctx.request.body.commits && serverChanged(ctx.request.body.commits)) {
    const { stdout } = await execFile('/root/project/my-blog/run.sh')
    console.log(stdout)
    ctx.body = {
      status: 200,
      message: 'server had restart',
      data: stdout
    }
  } else {
    ctx.body = {
      status: 200,
      message: 'push has received'
    }
  }
})

function serverChanged (commits) {
  let {added, removed, modified} = commits
  let all = [added, removed, modified]
  all.forEach(array => {
    if (array && array.length > 0) {
      array.forEach(item => {
        if (item.match(/^server\//)) {
          return true
        }
      })
    }
  })
  return false
}

module.exports = router
