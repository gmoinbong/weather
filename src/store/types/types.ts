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