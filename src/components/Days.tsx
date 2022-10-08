import React from 'react'

import { day, dayInfo, iconSwitch } from '../assets/constants/constants';
import { capitalizeFirstLetter } from '../assets/constants/functions';
import { useCustomSelector } from '../hooks/store';
import { selectCurrentWeatherData } from '../store/types/selectors';
import { Day } from '../store/types/types';
import st from '../styles/Days.module.scss'
import Card from './Card';
import Tab from './Tab';

type Props = {}

const Days = (props: Props) => {
    const { weatherOrigin } = useCustomSelector(selectCurrentWeatherData)

    const tempDay = `${Math.floor(weatherOrigin.main.temp)}`                                        // Значение температуры днём
    const tempNight = `${Math.floor(weatherOrigin.main.temp_min)}`                                   // Значение температуры ночью
    const infoToday = `${capitalizeFirstLetter(weatherOrigin.weather[0].description)}`              // Информация на текущий день
    const checkedTempDay = weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`             // Проверенное значение температуры днём
    const checkedTempNight = weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`  // Проверенное значение температуры ночью
    const icon = weatherOrigin.weather[0].main

    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: dayInfo(0),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
        },
        {
            day: 'Завтра',
            day_info: dayInfo(1),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
        },
        {
            day: day(2),
            day_info: dayInfo(2),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
        },
        {
            day: day(3),
            day_info: dayInfo(3),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
        },
        {
            day: day(4),
            day_info: dayInfo(4),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
        },
        {
            day: day(5),
            day_info: dayInfo(5),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
        },
        {
            day: day(6),
            day_info: dayInfo(6),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
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