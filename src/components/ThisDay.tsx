import React, { useState, useEffect } from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import { Weather } from '../store/types/types';
import st from '../styles/ThisDay.module.scss'

interface Props {
    weather: Weather
}

function ThisDay({ weather }: Props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 900);
        return () => clearInterval(interval);
    }, []);

    const dayTemp = `${Math.floor(weather.main.temp)}°`
    const city = weather.name


    return (
        <div className={st.this__day}>
            <div className={st.block__top}>
                <div className={st.wrapper}> <div className={st.day__temp}>{dayTemp}
                    <div className={st.today__title}>Сегодня</div></div>
                    <GlobalSvgSelector city={city} id={'sun'} />
                </div>
            </div>
            <div className={st.block__bottom}>
                <div className={st.inf}>Время: {time} </div>
                <div className={st.inf}>Город: {city} </div>
            </div>
        </div>
    )
}

export default ThisDay