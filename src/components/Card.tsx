import React, { useState } from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector';
import st from '../styles/Days.module.scss'
import { Day } from '../store/types/types';
import { Popup } from './PopUp';

interface Props {
    day: Day;
}

const Card = ({ day }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const togglePopUp = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={st.card} onClick={togglePopUp}>
            {isOpen && <Popup togglePopUp={togglePopUp} />}
            <div className={st.day}>{day.day}</div>
            <div className={st.day__info}>{day.day_info}</div>
            <div className={st.img}>
                <GlobalSvgSelector id={day.icon_id} />
            </div>
            <div className={st.temp__day}>{day.temp_day}</div>
            <div className={st.temp__night}>{day.temp_night}</div>
            <div className={st.info}>{day.info}</div>
        </div>
    )
}

export default Card