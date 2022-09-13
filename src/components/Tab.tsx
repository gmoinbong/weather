import React from 'react'
import st from '../styles/Days.module.scss'
type Props = {}
interface tab {
    value: string


}
const Tab = (tab: Props) => {
    const tabs = [{
        value: 'На неделю'
    },
    {
        value: ' На 10 дней'
    }]


    return (
        <div className={st.tabs}>
            <div className={st.tabs__wrapper}>
                {tabs.map(tab =>
                    <div className={st.tab}
                        key={tab.value}>{tab.value}
                    </div>)}
            </div>
            <div className={st.cancel}>Отменить</div>
        </div>)

}


export default Tab