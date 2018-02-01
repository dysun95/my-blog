import axios from './index'

export default function ajax (config) {
  return new Promise((resolve, reject) => {
    axios(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
