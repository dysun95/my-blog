let dbConnect = require('../main')

async function updateUser (user, userInfo) {
  let collection = await dbConnect('user')
  let result = await collection.updateOne(user, {$set: userInfo})
  return result
}

module.exports = updateUser
