import ajax from './ajax'

export function login (data) {
  return ajax({
    method: 'POST',
    url: '/login',
    data: data
  })
}
