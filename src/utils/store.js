const USER_KEY = 'USER_KEY'

export const setUser = (user) => {
  sessionStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUser = () => {
  var jsonText = sessionStorage.getItem(USER_KEY)
  if (!jsonText) return null
  return JSON.parse(jsonText)
}

export const clearAll = () => {
  sessionStorage.clear()
}

export default { setUser, getUser, clearAll }
