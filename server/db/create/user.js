// let dbConnect = require('../main')

async function createUser (db, user) {
  let collection = db.collection('user')
  let result = await collection.insertOne(user)
  return result
}

module.exports = createUser
