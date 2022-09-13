import React from 'react'
import { daysOfWeek, months, myDate } from '../assets/constants/constants';
import { capitalizeFirstLetter } from '../assets/constants/functions';
import { useCustomSelector } from '../hooks/store';
import { selectCurrentWeatherData } from '../store/types/selectors';
import st from '../styles/Days.module.scss'
import Card from './Card';
import Tab from './Tab';

type Props = {}

export interface Day {
    day: any,
    day_info: string,
    icon_id: unknown,
    temp_day: string,
    temp_night: string,
    info: string,
}


const Days = (props: Props) => {

    const { weatherOrigin } = useCustomSelector(selectCurrentWeatherData)

    const tempDay = `${Math.floor(weatherOrigin.main.temp)}`
    const tempNight = `${Math.floor(weatherOrigin.main.temp_min)}`
    const infoToday = `${capitalizeFirstLetter(weatherOrigin.weather[0].description)}`
    const today = myDate.getDate()
    const thisMonth = months[myDate.getMonth()]
    const icon = weatherOrigin.weather[0].main

    const iconSwitch = (icon: unknown) => {
        switch (icon) {
            case 'Rain':
                return 'rain'
            case 'Clouds':
                return 'mainly_cloudy'
            case 'Clear':
                return 'sun'
            default: return 'sun'
        }
    }
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: today + ' ' + thisMonth,
            icon_id: iconSwitch(icon),
            temp_day: weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`,
            temp_night: weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`,
            info: infoToday,
        },
        {
            day: 'Завтра',
            day_info: today >= 31 ? today - 30 + ' ' + months[myDate.getMonth() + 1] : today + 1 + ' ' + thisMonth,
            icon_id: iconSwitch(icon),
            temp_day: weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`,
            temp_night: weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`,
            info: infoToday,
        },
        {
            day: daysOfWeek[myDate.getDay()],
            day_info: today >= 31 ? today - 30 + 1 + ' ' + months[myDate.getMonth() + 1] : today + 2 + ' ' + thisMonth,
            icon_id: iconSwitch(icon),
            temp_day: weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`,
            temp_night: weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`,
            info: infoToday,
        },
        {
            day: 'Чт',
            day_info: today >= 31 ? today - 30 + 2 + ' ' + months[myDate.getMonth() + 1] : today + 3 + ' ' + thisMonth,
            icon_id: iconSwitch(icon),
            temp_day: weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`,
            temp_night: weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`,
            info: infoToday,
        },
        {
            day: 'Пт',
            day_info: today >= 31 ? today - 30 + ' ' + months[myDate.getMonth() + 1] : today - 27 + ' ' + months[myDate.getMonth() + 1],
            icon_id: iconSwitch(icon),
            temp_day: weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`,
            temp_night: weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`,
            info: infoToday,
        },
        {
            day: 'Сб',
            day_info: today >= 31 ? today - 30 + ' ' + months[myDate.getMonth() + 1] : today - 26 + ' ' + months[myDate.getMonth() + 1],
            icon_id: iconSwitch(icon),
            temp_day: weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`,
            temp_night: weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`,
            info: infoToday,
        },
        {
            day: 'Вс',
            day_info: today >= 31 ? today - 30 + ' ' + months[myDate.getMonth() + 1] : today - 25 + ' ' + months[myDate.getMonth() + 1],
            icon_id: iconSwitch(icon),
            temp_day: weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`,
            temp_night: weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`,
            info: infoToday,
        },
    ];
    return (
        <>
            <Tab />
            <div className={st.days}>{days.map((day: Day) =>
                <Card day={day} key={day.day} />
            )}</div>
        </>
    )
}

export default Days