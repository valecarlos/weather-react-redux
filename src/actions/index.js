import axios from 'axios'
const API_KEY = '4ea93545dcde82abc34e5da1606d93c6'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` 

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url =  `${ROOT_URL}&q=${city},us`
    const request = axios.get(url) //the promise is handled by redux-promise
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}