const readUser = require('../../db/read/user')
const resHandler = require('../../util/response')

/**
 * @description 查询用户信息, 单条, 查询条件为name
 */
async function getUser (db, ctx) {
  if (ctx.query.name) {
    let user = {
      'name': ctx.query.name
    }
    let result = await readUser(db, user)
    if (result.name && result.puid) {
      let {name, puid} = result
      resHandler(ctx, 200, {
        name: name,
        puid: puid
      })
    } else {
      resHandler(ctx, 4001)
    }
  } else {
    resHandler(ctx, 4000)
  }
}

module.exports = getUser
