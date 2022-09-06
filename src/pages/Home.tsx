import React from 'react'
import Days from '../components/Days'
import Header from '../components/Header'
import { Popup } from '../components/PopUp'
import ThisDay from '../components/ThisDay'
import ThisDayInfo from '../components/ThisDayInfo'
import st from '../styles/Home.module.scss'
type Props = {

}

const Home = (props: Props) => {
    return (
        <div className='home'>
            <Header />
            <div className={st.wrapper}>
                <ThisDay />
                <ThisDayInfo />
            </div>
            <div className={st.day__wrapper}></div>
            <Days />
        </div>
    )
}
export default Home