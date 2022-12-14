import React from 'react'
import '../styles/Days.scss'

import { useCustomSelector } from '../hooks/store';
import { selectCurrentWeatherData } from '../store/types/selectors';

import { day, dayInfo, iconSwitch } from '../assets/constants/constants';
import { capitalizeFirstLetter } from '../assets/constants/functions';
import { Day } from '../store/types/types';
import Card from './Card';
import Tab from './Tab';

const Days = () => {

    const { weatherOrigin } = useCustomSelector(selectCurrentWeatherData)

    const tempDay = `${Math.floor(weatherOrigin.main.temp)}`                                        // Значение температуры днём
    const tempNight = `${Math.floor(weatherOrigin.main.temp_min)}`                                   // Значение температуры ночью
    const infoToday = `${capitalizeFirstLetter(weatherOrigin.weather[0].description)}`              // Информация на текущий день
    const checkedTempDay = weatherOrigin.main.temp >= 0 ? `+${tempDay}` : `-${tempDay}`             // Проверенное значение температуры днём
    const checkedTempNight = weatherOrigin.main.temp_min >= 0 ? `+${tempNight}` : `-${tempNight}`  // Проверенное значение температуры ночью
    const icon = weatherOrigin.weather[0].main
    const [activeId, setActiveId] = React.useState(0);

    const days7: Day[] = [
        {
            day: 'Сегодня',
            day_info: dayInfo(0),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
            id: 0,
        },
        {
            day: 'Завтра',
            day_info: dayInfo(1),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
            id: 1
        },
        {
            day: day(2),
            day_info: dayInfo(2),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
            id: 2
        },
        {
            day: day(3),
            day_info: dayInfo(3),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
            id: 3
        },
        {
            day: day(4),
            day_info: dayInfo(4),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
            id: 4
        },
        {
            day: day(5),
            day_info: dayInfo(5),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
            id: 5
        },
        {
            day: day(6),
            day_info: dayInfo(6),
            icon_id: iconSwitch(icon),
            temp_day: checkedTempDay,
            temp_night: checkedTempNight,
            info: infoToday,
            id: 6
        },
    ];
    const days14: Day[] = [{
        day: day(7),
        day_info: dayInfo(7),
        icon_id: iconSwitch(icon),
        temp_day: checkedTempDay,
        temp_night: checkedTempNight,
        info: infoToday,
        id: 0,
    },
    {
        day: day(8),
        day_info: dayInfo(8),
        icon_id: iconSwitch(icon),
        temp_day: checkedTempDay,
        temp_night: checkedTempNight,
        info: infoToday,
        id: 1
    },
    {
        day: day(9),
        day_info: dayInfo(9),
        icon_id: iconSwitch(icon),
        temp_day: checkedTempDay,
        temp_night: checkedTempNight,
        info: infoToday,
        id: 2
    },
    {
        day: day(10),
        day_info: dayInfo(10),
        icon_id: iconSwitch(icon),
        temp_day: checkedTempDay,
        temp_night: checkedTempNight,
        info: infoToday,
        id: 3
    },
    {
        day: day(11),
        day_info: dayInfo(11),
        icon_id: iconSwitch(icon),
        temp_day: checkedTempDay,
        temp_night: checkedTempNight,
        info: infoToday,
        id: 4
    },
    {
        day: day(12),
        day_info: dayInfo(12),
        icon_id: iconSwitch(icon),
        temp_day: checkedTempDay,
        temp_night: checkedTempNight,
        info: infoToday,
        id: 5
    },
    {
        day: day(13),
        day_info: dayInfo(13),
        icon_id: iconSwitch(icon),
        temp_day: checkedTempDay,
        temp_night: checkedTempNight,
        info: infoToday,
        id: 6
    },]

    const mapSevenDay = days7.map((day: Day) =>
        <Card id={day.id} dayName={dayInfo(day.id)} day={day} key={day.day} />)

    const map14Day = days14.map((day: Day) =>
        <Card id={day.id} dayName={dayInfo(day.id + 7)} day={day} key={day.day} />)

    return (
        <>
            <Tab activeId={activeId} setActiveId={setActiveId} />
            <div className='days'>
                {activeId === 0 ? mapSevenDay : map14Day}
            </div>
        </>
    )
}

export default Days