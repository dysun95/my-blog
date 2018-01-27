/**
 *@argument before sha1加密前的值
 *@returns sha1加密后的值 
 */

var crypto = require('crypto')
var secret = 'sundengyu'

function sha256 (before) {
  return crypto.createHmac('sha256', secret)
    .update(before)
    .digest('hex')
}

function md5 (before) {
  return crypto.createHash('md5')
    .update(before)
    .digest('hex')
}

module.exports.sha256 = sha256
module.exports.md5 = md5
