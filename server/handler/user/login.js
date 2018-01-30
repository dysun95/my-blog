const readUser = require('../../db/read/user')
const encrypt = require('../../util/encrypt')
const encodeToken = require('../../util/token').encodeToken
const resHandler = require('../../util/response')

async function login (db, ctx) {
  let user = ctx.request.body
  if (user && user.name && user.passwd) {
    let result = await readUser(db, {'name': user.name})
    if (result && result.name && result.puid && result.passwd) {
      if (result.name === user.name && result.passwd.toString() === encrypt.sha256(user.passwd.toString())) {
        // 用户名、密码正确
        let token = encodeToken(result.puid)
        ctx.cookies.set('puid', result.puid, {
          domain: '.dysun95.tk',
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 2
        })
        ctx.cookies.set('token', token, {
          domain: '.dysun95.tk',
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 2,
          httpOnly: true
        })
        resHandler(ctx, 200, {
          name: result.name,
          puid: result.puid
        })
      } else {
        // 用户名/密码错误
        resHandler(ctx, 4003)
      }
    } else {
      // 未查到此用户
      resHandler(ctx, 4001)
    }
  } else {
    resHandler(ctx, 4004)
  }
}

module.exports = login
