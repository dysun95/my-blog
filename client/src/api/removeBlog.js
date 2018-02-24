import ajax from './index'

export function removeBlog (data) {
  return ajax({
    method: 'POST',
    url: '/remove/blog',
    data: data
  })
}
