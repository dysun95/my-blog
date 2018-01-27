let MongoClient = require('mongodb').MongoClient
let DB_CONN_STR = 'mongodb://localhost:27017'
let DB_NAME = 'website'

/**
 * 连接数据库
 * @param {String} collectionName
 */
async function dbConnect (collectionName) {
  try {
    let client = await MongoClient.connect(DB_CONN_STR)
    let db = client.db(DB_NAME)
    let col = await db.collection(collectionName)
    return col
  } catch (err) {
    console.log(err)
  }
}

module.exports = dbConnect
