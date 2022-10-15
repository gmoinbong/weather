import React, { useState } from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector';
import '../styles/Days.scss'
import { Day } from '../store/types/types';
import { Popup } from './PopUp';

interface Props {
    day: Day;
    dayName: string
    id: number
}

const Card = ({ day, dayName, id }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const togglePopUp = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='card' onClick={togglePopUp}>
            {isOpen && <Popup id={id} dayName={dayName} togglePopUp={togglePopUp} />}
            <div className='day'>{day.day}</div>
            <div className='day__info'>{day.day_info}</div>
            <div className='img'>
                <GlobalSvgSelector id={day.icon_id} />
            </div>
            <div className='temp__day'>{day.temp_day}</div>
            <div className='temp__night'>{day.temp_night}</div>
            <div className='info'>{day.info}</div>
        </div>
    )
}

export default Card