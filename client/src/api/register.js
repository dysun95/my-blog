import ajax from './ajax'

export function register (data) {
  return ajax({
    method: 'POST',
    url: '/register',
    data: data
  })
}
