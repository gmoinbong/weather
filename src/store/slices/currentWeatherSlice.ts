import { AxiosResponse } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Weather } from '../types/types'

type currentWeather = {
    weatherOrigin: Weather
    isLoading: boolean
    response: Response
}

type Response = {
    status: number
    message: string
}

const initialState: currentWeather = {
    weatherOrigin: {
        main: {
            feels_like: 0,
            temp: 0,
            pressure: 750,
            temp_min: 0,
            humidity: 87
        },
        name: 'Выбрать город',
        wind: {
            speed: 0
        },
        weather: [{
            description: 'Описание'
        }],

    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState, reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;

        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weatherOrigin = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }

        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }

        }
    }
})


export default currentWeatherSlice.reducer