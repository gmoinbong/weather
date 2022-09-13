import React from 'react'
import st from '../styles/ThisDayInfo.module.scss'
import cloud from '../assets/icons/cloud.png'
import ThisDayInfoItem from './ThisDayInfoItem';
import { Weather } from '../store/types/types';

type Props = {
  weatherOrigin: Weather
}


export interface Item {
  icon_id: string,
  name: string,
  value: string,
}



function ThisDayInfo({ weatherOrigin }: Props) {

  const feelsLike = `${Math.floor(weatherOrigin.main.temp)}° - ощущается как ${Math.floor(weatherOrigin.main.feels_like)}° `
  const pressure = `${weatherOrigin.main.pressure} мм ртутного столба`
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