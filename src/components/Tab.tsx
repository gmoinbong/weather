import React from 'react'
import st from '../styles/Days.module.scss'
type Props = {}
interface Tab {
    value: string
}
const Tab = (Tab: Props) => {
    const tabs = [{
        value: 'На неделю'
    }
        ,
    {
        value: 'На месяц'
    },
    {
        value: ' На 10 дней'
    }
    ]
    return (
        <div className={st.tabs}>
            <div className={st.tabs__wrapper}>
                {tabs.map(tab => <div className={st.tab} key={tab.value}>{tab.value}</div>)}
            </div>
            <div className={st.cancel}>Отменить</div>
        </div>)

}


export default Tab