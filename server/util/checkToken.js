let decodeToken = require('./token').decodeToken

/**
 * 根据request中的token和puid判断是否为有效用户
 * @param {Object} req - 请求对象
 * @param {String} [req.cookies.token] - cookie带token
 * @param {String} [req.query.token] - url参数带token
 * @returns {Number} 200, 4006, 4005
 */
function checkToken (ctx) {
  let token = ctx.cookies.get('token') || ctx.query.token || ctx.request.body.token || ''
  let puid = ctx.cookies.get('puid') || ctx.query.puid || ctx.request.body.puid || ''
  if (token && puid) {
    let puidInToken = decodeToken(token)
    console.log(puidInToken)
    if (puidInToken === puid) {
      // token验证成功
      return 200
    } else {
      // token失效
      return 4006
    }
  } else {
    // puid或token不存在
    return 4005
  }
}

module.exports = checkToken
