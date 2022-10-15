import React from 'react'
import { valuesOfTabs } from '../assets/constants/constants'
import { PropsOfButtons } from '../store/types/types'
import '../styles/Days.scss'


const Tab = ({ activeId, setActiveId }: PropsOfButtons) => {

    return (
        <div className='tabs'>
            <div className='tabs__wrapper'>
                {valuesOfTabs.map((text, id) => (
                    <button
                        key={id}
                        onClick={() => setActiveId(id)}
                        className={activeId === id ? 'active button' : 'button'}>
                        {text}
                    </button>
                ))}
            </div>
            <button className='cancel' onClick={() => setActiveId(0)}>Отменить</button>
        </div >)

}


export default Tab