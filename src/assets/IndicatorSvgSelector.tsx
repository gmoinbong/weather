import React from 'react';
import { PrecipitationIndicator } from './icons/PrecipitationIndicator';
import { PressureIndicator } from './icons/PressureIndicator';
import { TempIndicator } from './icons/TempIndicator';
import { WindIndicator } from './icons/WindIndicator';

interface Props {
    id: string;
}

export const IndicatorSvgSelector = ({ id }: Props) => {
    switch (id) {
        case 'temp':
            return (
                <TempIndicator />
            );
        case 'pressure':
            return (
                <PressureIndicator />
            );
        case 'precipitation':
            return (
                <PrecipitationIndicator />
            );
        case 'wind':
            return (
                <WindIndicator />
            );
        default:
            return null;
    }
};