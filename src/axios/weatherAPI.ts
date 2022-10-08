import axios from "axios"
const REACT_APP_API_KEY = '186bd86d8ce1b477fbb716010c6199a2'
const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5/weather?'

const api = axios.create({
    baseURL: REACT_APP_API_URL

})

api.interceptors.request.use(config => {
    config.url = REACT_APP_API_URL + config.url + REACT_APP_API_KEY + '&units=metric&lang=ru';
    return config
})


export default api

