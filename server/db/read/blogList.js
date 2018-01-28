// let dbConnect = require('../main')

/**
 * @description 根据author来查询列表, 根据生成时间降序, 即返回最新的
 * @param {Object} blog 
 */
async function readBlogList (db, blog) {
  let collection = db.collection('blog')
  let result = await collection.find(blog).sort({
    'createTime': -1
  }).toArray()
  return result
}

module.exports = readBlogList
