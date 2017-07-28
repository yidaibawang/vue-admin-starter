import http from './http'

export const createRequest = (path, method = 'get') => data => {
  return http({
    method: method,
    url: path,
    data: method === 'get' ? null : data,
    params: method === 'get' ? data : null
  }).then(res => res.data)
}

// Authorize
export const login = createRequest('token', 'post')

// User
export const createUser = createRequest('users', 'post')
export const getUsers = createRequest('users')
export const getUser = id => http.get(`users/${id}`).then(res => res.data)
