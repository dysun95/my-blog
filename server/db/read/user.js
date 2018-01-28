// let dbConnect = require('../main')

async function readUser (db, user) {
  let collection = db.collection('user')
  let result = await collection.findOne(user)
  return result
}

module.exports = readUser
