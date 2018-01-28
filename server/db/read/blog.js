// let dbConnect = require('../main')

async function readBlog (db, blog) {
  let collection = db.collection('blog')
  let result = await collection.findOne(blog)
  return result
}

module.exports = readBlog
