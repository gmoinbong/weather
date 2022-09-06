import React from 'react';
import Select from 'react-select';
import { Item } from './ThisDayInfo';
import ThisDayInfoItem from './ThisDayInfoItem';
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector';
import st from '../styles/PopUp.module.scss';

interface Props { }

export const Popup = ({ }: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];
    return (
        <>
            <div className={st.blur}></div>
            <div className={st.popup}>
                <div className={st.day}>
                    <div className={st.day__temp}>20°</div>
                    <div className={st.day__name}>Среда</div>
                    <div className={st.img}>
                        <GlobalSvgSelector id="sun" />
                    </div>
                    <div className={st.day__time}>
                        Время: <span>21:54</span>
                    </div>
                    <div className={st.day__city}>
                        Время: <span>Санкт-Петербург</span>
                    </div>
                </div>
                <div className={st.this__day_info_items}>
                    {items.map((item: Item) => (
                        <ThisDayInfoItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className={st.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    );
};