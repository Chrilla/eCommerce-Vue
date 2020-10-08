import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:9999/api',   
    headers: {
        'Content-Type': 'application/json',
        'Authentication': 'bearer ' + sessionStorage.getItem('token')
    }
})