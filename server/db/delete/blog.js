// 不可以物理删除，添加 remove字段

async function deleteBlog (db, blog) {
  let collection = db.collection('blog')
  // let result = await collection.deleteOne(blog)
  let result = await collection.updateOne(blog, {$set: {remove: 1}})
  return result
}

module.exports = deleteBlog
