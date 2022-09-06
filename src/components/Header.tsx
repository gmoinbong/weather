import React, { useEffect, useState } from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import st from '../styles/Header.module.scss'
import Select from 'react-select'
import { useTheme } from '../hooks/useTheme'
import { Theme } from '../context/ThemeContext'

function Header() {
    const theme = useTheme()
    const options = [
        { value: 'city-1', label: 'Chernyhiv' },
        { value: 'city-2', label: 'Sumy' },
        { value: 'city-3', label: 'Kyiv' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            height: '37px',
            width: '194px',
            borderRadius: '10px',
            border: 'none',
            zIndex: 100,
        }),

        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#FFFFFF' : '#000000'
        })
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
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
                        <div className={st.svg}>
                            <Select defaultValue={{ label: 'Chernyhiv' }} styles={colourStyles} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header