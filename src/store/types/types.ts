export type Weather = {
    name: string
    main: {
        temp: number
        feels_like: number
        pressure: number
        temp_min: number
        humidity: number
    }
    wind: {
        speed: number
    }
    weather: [{
        description: string
        main?: string
    }],
}
export interface Day {
    day: any,
    day_info: string,
    icon_id: unknown,
    temp_day: string,
    temp_night: string,
    info: string,
    id: number
}
export interface CityProps {
    searchCity: string,
    setSearchCity: React.Dispatch<React.SetStateAction<string>>
}
