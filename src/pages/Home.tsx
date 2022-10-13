import React from 'react'

import Days from '../components/Days'
import Header from '../components/Header'
import ThisDay from '../components/ThisDay'
import ThisDayInfo from '../components/ThisDayInfo'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import st from '../styles/Home.module.scss'
import { fetchCurrentWeather } from '../store/thunks/fetchCurrentWeather'
import { selectCurrentWeatherData } from '../store/types/selectors'


const Home = () => {
    const { weatherOrigin } = useCustomSelector(selectCurrentWeatherData)
    const dispatch = useCustomDispatch()

    const fetchWeather = (searchValue: string) => {
        dispatch(fetchCurrentWeather(searchValue));
    };

    return (
        <div className='home'>
            <Header onInputSubmit={fetchWeather} />
            <div className={st.wrapper}>
                <ThisDay weather={weatherOrigin} />
                <ThisDayInfo weatherOrigin={weatherOrigin} />
            </div>
            <div className={st.day__wrapper}></div>
            <Days />
        </div>
    )
}
export default Home