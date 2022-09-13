import axios, { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";


export class WeatherService {
    static getCurrentWeather(q: string): Promise<AxiosResponse<any>> {
        return api.get<Weather>(`q=${q}&appid=`)
    }
}  
