import ajax from './index'

export function getBlogList () {
  return ajax({
    method: 'GET',
    url: '/get/blogList'
  })
}
