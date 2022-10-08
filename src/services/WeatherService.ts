import { AxiosResponse } from "axios";
import api from "../axios/weatherAPI";
import { Weather } from "../store/types/types";


export class WeatherService {
    static getCurrentWeather(q: string): Promise<AxiosResponse<any>> {
        return api.get<Weather>(`q=${q}&appid=`)
    }
}  
