import React, { useEffect, useState } from 'react'

import Days from '../components/Days'
import Header from '../components/Header'
import ThisDay from '../components/ThisDay'
import ThisDayInfo from '../components/ThisDayInfo'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import st from '../styles/Home.module.scss'
import { fetchCurrentWeather } from '../store/thunks/fetchCurrentWeather'
import { selectCurrentWeatherData } from '../store/types/selectors'


const Home = () => {
    const [mount, setMount] = useState(false)
    const { weatherOrigin } = useCustomSelector(selectCurrentWeatherData)
    const dispatch = useCustomDispatch()

    const fetchWeather = (searchValue: string) => {
        dispatch(fetchCurrentWeather(searchValue));
    };
    useEffect(() => {
        if (!mount) {
            setMount(true);
            fetchWeather('Киев')
        }
    }, [fetchWeather, mount])

    return (
        <>
            <Header onInputSubmit={fetchWeather} />
            <div className={st.wrapper}>
                <ThisDay weather={weatherOrigin} />
                <ThisDayInfo weatherOrigin={weatherOrigin} />
                <div className={st.day__wrapper}></div>
            </div>
            <Days />
        </>
    )
}
export default Home