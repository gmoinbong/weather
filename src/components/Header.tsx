import React, { ChangeEvent, KeyboardEvent } from 'react'
import st from '../styles/Header.module.scss'

import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import { useTheme } from '../hooks/useTheme'
import { Theme } from '../context/ThemeContext'

type HeaderProps = {
    onInputSubmit: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onInputSubmit }) => {
    const [value, setValue] = React.useState("");
    const theme = useTheme()
    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && value) {
            onInputSubmit(value);
        }
    };
    return (
        <header className={st.header}>
            <div className={st.wrapper}>
                <div className={st.logo}>
                    <GlobalSvgSelector id={'header-logo'} />
                    <div className={st.title}>Weather</div>
                </div>

                <div className={st.select}>
                    <div className={st.change__theme} onClick={changeTheme}>
                        <GlobalSvgSelector id={'change-theme'} />
                    </div>
                    <label className={st.inp}>
                        <input type="text" className={st.inp} placeholder="Введите.."

                            onKeyDown={handleKeyDown}
                            onChange={handleOnChange} />
                        <span className={st.focusbg}></span>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default Header