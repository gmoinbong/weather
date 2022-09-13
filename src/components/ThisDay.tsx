import React, { useState, useEffect } from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import { Weather } from '../store/types/types';
import st from '../styles/ThisDay.module.scss'

interface Props {
    weather: Weather
}

function ThisDay({ weather }: Props) {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const dayTemp = `${Math.floor(weather.main.temp)}°`
    const city = weather.name


    return (
        <div className={st.this__day}>
            <div className={st.block__top}>
                <div className={st.wrapper}> <div className={st.day__temp}>{dayTemp}
                    <div className={st.today__title}><span>Сегодня</span></div></div>
                    <GlobalSvgSelector id={'sun'} />
                </div>
            </div>
            <div className={st.block__bottom}>
                <div className={st.day__time}>Время: {time} </div>
                <div className={st.day__city}>Город: {city} </div>
            </div>
        </div>
    )
}

export default ThisDay