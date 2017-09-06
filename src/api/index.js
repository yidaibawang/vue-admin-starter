import http from './http'

export const createRequest = (path, method = 'get') => data => {
  return http({
    method: method,
    url: path,
    data: method === 'get' ? null : data,
    params: method === 'get' ? data : null
  }).then(res => res.data)
}

export const login = data => {
  // todo: remote login
  return Promise.resolve({ name: 'Admin' })
}
