// let dbConnect = require('../main')

async function updateUser (db, user, userInfo) {
  let collection = db.collection('user')
  let result = await collection.updateOne(user, {$set: userInfo})
  return result
}

module.exports = updateUser
