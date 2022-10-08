import React, { useState } from 'react'
import st from '../styles/Days.module.scss'
type Props = {}
interface tab {
    value: string


}
const Tab = (tab: Props) => {
    const [isActive, setIsActive] = useState(false)

    const toggleTab = () => {
        setIsActive(!isActive)
    }

    const tabs = [{
        value: 'На неделю'
    },
    {
        value: ' На 14 дней'
    }]


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