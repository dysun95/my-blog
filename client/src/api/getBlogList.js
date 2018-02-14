import ajax from './index'

export function getBlogList () {
  return ajax({
    method: 'GET',
    url: '/get/blogList'
  })
}

export function getBlogListAll () {
  return ajax({
    method: 'GET',
    url: '/get/blogListAll'
  })
}
