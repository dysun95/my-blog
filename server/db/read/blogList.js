// let dbConnect = require('../main')

/**
 * @description 根据author来查询列表, 根据生成时间降序, 即返回最新的
 * @param {Object} blog 
 */
async function readBlogList (db, blog, sort = {'createTime': -1}) {
  let collection = db.collection('blog')
  let result = await collection.find(blog).sort(sort).toArray()
  return result
}

module.exports = readBlogList
