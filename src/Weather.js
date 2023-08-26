import React  from "react";



import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";

export default function Weather(props) {


     

let EmojiSrc = `http://openweathermap.org/img/wn/${props.emoji}@2x.png`;



        
    return (
      <div className="Weather">
        <h1>{props.city}</h1>

        <div className="info">{props.day} {props.fullday} ,{props.date}</div>
        <div className="info">{props.desc}</div>

      <CurrentTemp submit = {props.submit} city = {props.city} desc= {props.desc}  temp = {props.temp} emoji = {EmojiSrc} hum = {props.hum} wind = {props.wind}/>
      <Forecast forecast = {props.forecast}/>
      </div>
    );
   
}
