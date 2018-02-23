const multer = require('koa-multer')
const crypto = require('crypto')
const path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('/root/uploads/image'))
  },
  filename: function (req, file, cb) {
    let nameHash = crypto.createHash('md5')
      .update(file.originalname + new Date().toISOString())
      .digest('hex')
    let type = /\.[0-9a-zA-Z]*$/.exec(file.originalname)
    cb(null, nameHash + type)
  }
})

const upload = multer({
  storage: storage
})

module.exports = upload
