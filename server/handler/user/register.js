const readUser = require('../../db/read/user')
const createUser = require('../../db/create/user')
const updateUser = require('../../db/update/user')
const encrypt = require('../../util/encrypt')
// const hexToDec = require('../util/hexToDec')
const resHandler = require('../../util/response')

/**
 * 注册用户，存储用户信息，相同名字则不通过
 */
async function register (db, ctx) {
  let user = ctx.request.body
  if (user && user.name && user.passwd) {
    let result = await readUser(db, {name: user.name}) // 根据name查询用户
    if (result && result.name === user.name) {
      resHandler(ctx, 4002)
    } else {
      user.passwd = encrypt.sha256(user.passwd.toString()) // sha256加密
      // user.puid = sha1() // puid唯一性如何保证 -> 使用mongodb生成的_id作为puid
      result = await createUser(db, user)
      if (result.result && result.result.ok === 1) {
        // 用户信息插入成功
        let userNew = result.ops[0]
        // let puid = hexToDec(encrypt.md5(userNew._id.toString())).slice(0, 9)  // 数据库id使用md5加密后取前10位，将a-f变为0-5, 只是为了更随机一些, 并不能保证不唯一
        let puid = userNew._id.toString()
        result = await updateUser(db, {'_id': userNew._id}, {'puid': puid})
        if (result.result.ok === 1) {
          resHandler(ctx, 200, {
            id: puid,
            name: userNew.name
          })
        } else {
          // 用户id编辑失败
          resHandler(ctx, 5000)
        }
      } else {
        // 用户信息插入失败
        resHandler(ctx, 5000)
      }
    }
  } else {
    resHandler(ctx, 4004)
  }
}

module.exports = register
