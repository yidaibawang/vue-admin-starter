const CONFIG = {
  apiRoot: process.env.NODE_ENV === 'production'
    ? 'http://192.168.1.14:5001/api/'
    : 'http://192.168.1.14:5001/api/',
  imageRoot: 'http://localhost:5001/img/'
}

export default CONFIG
