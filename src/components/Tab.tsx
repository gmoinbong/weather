import React from 'react'
import st from '../styles/Days.module.scss'

const Tab = () => {
    const values = [
        " На неделю",
        "На 14 дней",
    ]
    const [activeId, setActiveId] = React.useState(0);

    return (
        <div className={st.tabs}>
            <div className={st.tabs__wrapper}>
                {values.map((text, id) => (
                    <button
                        key={id}
                        onClick={() => setActiveId(id)}
                        className={activeId === id ? 'active' : ''}>
                        {text}
                    </button>
                ))}
            </div>
            <button className={st.cancel}>Отменить</button>
        </div >)

}


export default Tab