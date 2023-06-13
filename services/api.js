import axios from 'axios'

const api = axios.create({
    baseURL: 'http://4.150.57.210:5000'
})


export { api };
