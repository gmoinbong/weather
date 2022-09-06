import React from 'react'
import { Item } from './ThisDayInfo'
import st from '../styles/ThisDayInfo.module.scss'
import { IndicatorSvgSelector } from '../assets/IndicatorSvgSelector'
type Props = {
    item: Item;
}

const ThisDayInfoItem = ({ item }: Props) => {
    const { icon_id, name, value } = item
    return (
        <div className={st.this__day__info__item}>
            <div className={st.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={st.indicator__name}>{name}</div>
            <div className={st.indicator__value}>{value}</div>
        </div>
    )
}
export default ThisDayInfoItem