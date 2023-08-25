import React, {useState}  from "react";
import {useEffect} from "react";


import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";

export default function Weather(props) {


    let [date , setDate] = useState(null);
    let [day , setDay] = useState(null);
    let [fullday , setFullday] = useState(null);


   
    

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
    

    function loadDate() {
        let now = new Date();
        console.log(now);
        let fullday = now.getDay();
        let day = days[now.getDay()];
        let hours = now.getHours();
        let min = now.getMinutes();
        if (min < 10) {
          min = `0${min}`;
        }
        let time = `${hours}:${min}`;
      
        setFullday (fullday);
        setDate  (time);
        setDay(day);

      }

   

      MyComponent();

      function MyComponent() {
         useEffect(() => {
            loadData();
         }, []); // Pass an empty array to only call the function once on mount.
         
         function loadData() {
      
          loadDate();
          console.log(date);
            // Fetch data or perform other loading logic here
         }
         
         // ... component render logic
      }


     

let EmojiSrc = `http://openweathermap.org/img/wn/${props.emoji}@2x.png`;



        
    return (
      <div className="Weather">
        <h1>{props.city}</h1>

        <div className="info">{day} {fullday} ,{date}</div>
        <div className="info">{props.desc}</div>

      <CurrentTemp submit = {props.submit} city = {props.city} desc= {props.desc}  temp = {props.temp} emoji = {EmojiSrc} hum = {props.hum} wind = {props.wind}/>
      <Forecast forecast = {props.forecast}/>
      </div>
    );
   
}
