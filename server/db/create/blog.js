// let dbConnect = require('../main')

async function createBlog (db, blog) {
  let collection = db.collection('blog')
  let result = await collection.insert(blog)
  return result
}

module.exports = createBlog
