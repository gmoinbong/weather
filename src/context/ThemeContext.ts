import {createContext} from 'react';

interface Props{
    theme: Theme,
    changeTheme: (theme:Theme)=> void
}

export enum Theme{
DARK =  'dark',
LIGHT = 'light'
}

export const ThemeContext = createContext<Props>({
theme: Theme.LIGHT,
changeTheme: ()=> {}
})