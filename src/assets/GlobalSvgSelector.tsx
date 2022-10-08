import React from 'react'
import { CLoseIcon } from './icons/CloseIcon'
import { HeaderLogo } from './icons/HeaderLogo'
import { MainlyCloudyIcon } from './icons/MainlyCloudyIcon'
import { RainIcon } from './icons/RainIcon'
import { SmallRainIcon } from './icons/SmallRainIcon'
import { SmallRainSunIcon } from './icons/SmallRainSunIcon'
import { SunIcon } from './icons/SunIcon'
import { ChangeThemeIcon } from './icons/ChangeThemeIcon'
type Props = {
    id: unknown
    onClick?: () => void
    city?: string
}

export const GlobalSvgSelector = ({ id, onClick, city }: Props) => {
    switch (id) {
        case 'header-logo':
            return (
                <HeaderLogo />
            );
        case 'change-theme':
            return (
                <ChangeThemeIcon />
            );
        case 'rain':
            return (
                <RainIcon />
            );
        case 'small_rain':
            return (
                <SmallRainIcon />
            );
        case 'small_rain_sun':
            return (
                <SmallRainSunIcon />
            );
        case 'sun':
            return (
                <SunIcon />
            );
        case 'mainly_cloudy':
            return (
                <MainlyCloudyIcon />
            );
        case 'close':
            return (
                <CLoseIcon />
            );

        default:
            return null;
    }
}
