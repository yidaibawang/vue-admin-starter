export const setToken = token => sessionStorage.setItem('token', token)
export const getToken = () => sessionStorage.getItem('token')

export const setUser = user => sessionStorage.setItem('user', JSON.stringify(user))
export const getUser = () => JSON.parse(sessionStorage.getItem('user'))

export default { setToken, getToken, setUser, getUser }
