import axios from "axios"
const REACT_APP_API_KEY = '6aeafd140474fff84a89594be45f8497'
const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const api = axios.create({
    baseURL: REACT_APP_API_URL

})

api.interceptors.request.use(config => {
    config.url = REACT_APP_API_URL + config.url + REACT_APP_API_KEY + '&units=metric&lang=ru';
    console.log(config.url);
    return config
})
export default api