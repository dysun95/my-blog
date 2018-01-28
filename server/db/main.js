let MongoClient = require('mongodb').MongoClient
let DB_CONN_STR = 'mongodb://localhost:27017'
let DB_NAME = 'website'

/**
 * 连接数据库
 */
async function dbConnect () {
  let client = await MongoClient.connect(DB_CONN_STR)
  let db = client.db(DB_NAME)
  // let col = db.collection(collectionName)
  return db
}

module.exports = dbConnect
