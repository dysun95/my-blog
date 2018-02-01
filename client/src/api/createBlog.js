import ajax from './ajax'

export function createBlog (data) {
  return ajax({
    method: 'POST',
    url: '/add/blog',
    data: data
  })
}
