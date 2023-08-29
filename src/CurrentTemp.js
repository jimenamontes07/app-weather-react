import React from "react";
import Temp from "./Temp"

export default function CurrentTemp(props){


    console.log(props.date);
    console.log(props.currentWeather);



return(
    <div className="CurrentTemp">


        <div className="row">
            <div className="col-6 mainTemp">
            <div>
                <img className="icon" src={props.currentWeather.icon} alt= {props.currentWeather.desc} />{" "} 

                <Temp temp = {props.currentWeather.temp} submit = {props.currentWeather.submit}/>
           
               

                </div> 
            </div>
            <div className="col-6 HumAndWind" >
                <div className="info">Humidity: {props.currentWeather.hum} %</div>
                 <div className="info">Wind: {props.currentWeather.wind} km/h </div>

            </div>
        </div>
    </div>
    );

}