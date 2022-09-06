import React from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import st from '../styles/ThisDay.module.scss'
type Props = {}

function ThisDay({ }: Props) {
    return (
        <div className={st.this__day}>
            <div className={st.block__top}>
                <div className={st.wrapper}> <div className={st.day__temp}>20°
                    <div className={st.today__title}><span>Сегодня</span></div></div>
                    <GlobalSvgSelector id={'sun'} />
                </div>
            </div>
            <div className={st.block__bottom}>
                <div className={st.day__time}>Время: 7:59</div>
                <div className={st.day__city}>Город: Чернигов</div>
            </div>
        </div>
    )
}

export default ThisDay