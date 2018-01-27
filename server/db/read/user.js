let dbConnect = require('../main')

async function readUser (user) {
  let collection = await dbConnect('user')
  let result = await collection.findOne(user)
  return result
}

module.exports = readUser
