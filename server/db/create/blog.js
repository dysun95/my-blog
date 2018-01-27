let dbConnect = require('../main')

async function createBlog (blog) {
  let collection = await dbConnect('blog')
  let result = await collection.insert(blog)
  return result
}

module.exports = createBlog
