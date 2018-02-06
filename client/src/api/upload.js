import ajax from './ajax'

export function upload (data) {
  return ajax({
    method: 'POST',
    url: '/upload/image',
    data: data
  })
}
