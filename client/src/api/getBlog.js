import ajax from './index'

export function getBlog (params) {
  return ajax({
    method: 'GET',
    url: '/get/blog',
    params: params
  })
}
