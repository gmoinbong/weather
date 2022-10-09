import React from 'react'
import st from '../styles/Days.module.scss'

const Tab = () => {


    return (
        <div className={st.tabs}>
            <div className={st.tabs__wrapper}>
                <button className={st.tab}>
                    На неделю
                </button>
                <button className={st.tab}>
                    На 14 дней
                </button>
            </div>
            <button className={st.cancel}>Отменить</button>
        </div >)

}


export default Tab