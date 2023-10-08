import React  from "react";



import CurrentTemp from "./CurrentTemp";
//import Forecast from "./Forecast";

export default function Weather(props) {


     





        
    return (
      <div className="Weather">
        <h1>{props.currentWeather.city}</h1>

        <div className="info">{props.date[2]} {props.date[0]} ,{props.date[1]}</div>
        <div className="info">{props.desc}</div>

      <CurrentTemp date = {props.date} submit={props.submit} currentWeather = {props.currentWeather}/>
      {/*<Forecast forecast = {props.forecast}/>*/}
      </div>
    );
   
}
