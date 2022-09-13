import React, { useEffect, useState } from 'react';
import { Item } from './ThisDayInfo';
import ThisDayInfoItem from './ThisDayInfoItem';
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector';
import { useCustomSelector } from '../hooks/store';
import { selectCurrentWeatherData } from '../store/types/selectors';
import st from '../styles/PopUp.module.scss';

interface Props {
    handleClose: () => void
}

export const Popup = ({ handleClose }: Props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const { weatherOrigin } = useCustomSelector(selectCurrentWeatherData)
    const feelsLike = `${Math.floor(weatherOrigin.main.temp)}° - ощущается как ${Math.floor(weatherOrigin.main.feels_like)}° `
    const pressure = `${weatherOrigin.main.pressure} мм ртутного столба`
    const dayTemp = `${Math.floor(weatherOrigin.main.temp)}°`
    const wind = `${weatherOrigin.wind.speed} м/с`
    const humidity = `Влажность ${weatherOrigin.main.humidity}%`


    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: feelsLike,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: pressure,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: humidity,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: wind,
        },
    ];



    return (
        <>
            <div className={st.blur}> </div>
            <div className={st.popup}>
                <div className={st.day}>
                    <div className={st.day__temp}>{dayTemp}</div>
                    <div className={st.day__name}>Среда</div>
                    <div className={st.img}>
                        <GlobalSvgSelector id="sun" />
                    </div>
                    <div className={st.day__time}>
                        Время: <span>{time}</span>
                    </div>
                    <div className={st.day__city}>
                        Город: <span>{weatherOrigin.name}</span>
                    </div>
                </div>
                <div className={st.this__day_info_items}>
                    {items.map((item: Item) => (
                        <ThisDayInfoItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className={st.close}  >
                    <GlobalSvgSelector id="close" onClick={handleClose} />
                </div>
            </div>

        </>
    );
};