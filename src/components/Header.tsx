import React from 'react'
import st from '../styles/Header.module.scss'

import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import { useTheme } from '../hooks/useTheme'
import { Theme } from '../context/ThemeContext'
import { CityProps } from '../store/types/types'



const Header: React.FC<CityProps> = ({ searchCity, setSearchCity }) => {
    const theme = useTheme()
    // const colourStyles = {
    //     control: (styles: any) => ({
    //         ...styles,
    //         backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
    //         height: '37px',
    //         width: '194px',
    //         borderRadius: '10px',
    //         border: 'none',
    //         zIndex: 100,
    //     }),
    // }
    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const handleOnChange = (e: any) => {
        setTimeout(() => {
            e.preventDefault()
            setSearchCity(e.target.value)
        }, 1500);
    }


    return (

        <header className={st.header}>
            <div className={st.wrapper}>
                <div className={st.logo}>
                    <GlobalSvgSelector id={'header-logo'} />
                    <div className={st.title}>Actually Weather</div>
                </div>
                <div className={st.wrapper}>
                    <div className={st.select}>
                        <div className={st.change__theme} onClick={changeTheme}>
                            <GlobalSvgSelector id={'change-theme'} />
                        </div>

                        <label className={st.inp}>
                            <input type="text" className={st.inp} placeholder="Введите город.." onChange={(e) => handleOnChange(e)} />
                            <span className={st.focusbg}></span>
                        </label>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header