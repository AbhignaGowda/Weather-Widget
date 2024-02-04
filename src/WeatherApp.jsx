import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:19.93,
        temp:20.83,
        tempMin:17.84,
        tempMax:21.05,
        humidity:37,
        weather:"haze"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div><h2>Weather app by delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <br /> <br />
        <InfoBox info={weatherInfo}/>
        </div>
    )
}