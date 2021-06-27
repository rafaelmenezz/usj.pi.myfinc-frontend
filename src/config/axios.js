import axios from 'axios'

const success = res => res
const error = err => {
    if (401 === err.response.status) {
        window.location = '/home'
    } else {
        return Promise.reject(err.message)
    }
}

axios.interceptors.response.use(success, error)