let dbConnect = require('../main')

async function createUser (user) {
  let collection = await dbConnect('user')
  let result = await collection.insert(user)
  return result
}

module.exports = createUser
