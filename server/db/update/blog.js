// let dbConnect = require('../main')

async function updateBlog (db, blog, blogInfo) {
  let collection = db.collection('blog')
  let result = await collection.updateOne(blog, {$set: blogInfo})
  return result
}

module.exports = updateBlog
