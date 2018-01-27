let dbConnect = require('../main')

async function updateBlog (blog, blogInfo) {
  let collection = await dbConnect('blog')
  let result = await collection.updateOne(blog, {$set: blogInfo})
  return result
}

module.exports = updateBlog
