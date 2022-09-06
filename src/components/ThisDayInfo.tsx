import React from 'react'
import st from '../styles/ThisDayInfo.module.scss'
import cloud from '../assets/icons/cloud.png'
import ThisDayInfoItem from './ThisDayInfoItem';
type Props = {}

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

function ThisDayInfo({ }: Props) {
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
    <div className={st.this__day__info}>
      <div className={st.item}>
        {items.map((item: Item) =>
          <ThisDayInfoItem key={item.icon_id} item={item} />
        )}
        <img className={st.cloud__item} src={cloud} alt='Cloud' />
      </div>
    </div>
  )
}

export default ThisDayInfo