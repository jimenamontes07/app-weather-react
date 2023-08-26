import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Weather from "./Weather";

import "./App.css";

export default function Search() {


  //date 



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




  let [city, setCity] = useState("London");
  let [submit, setSubmit] = useState("start");
  let[newCity, setNewcity] = useState("London");

//for Current Temp
  let [desc, setDesc] = useState(null);
  let [temp, setTemp] = useState(null);
  let [hum, setHum] = useState(null);
  let [wind, setWind] = useState(null);
  let [emoji, setEmoji] = useState(null);

//for forecast


let [temp1 , setTemp1] = useState(null);
let [temp2 , setTemp2] = useState(null);
let [temp3 , setTemp3] = useState(null);
let [temp4 , setTemp4] = useState(null);
let [temp5 , setTemp5] = useState(null);

let [emoji1 , setEmoji1] = useState(null);
let [emoji2 , setEmoji2] = useState(null);
let [emoji3 , setEmoji3] = useState(null);
let [emoji4 , setEmoji4] = useState(null);
let [emoji5 , setEmoji5] = useState(null);

let [date1 , setDate1] = useState(null);
let [date2 , setDate2] = useState(null);
let [date3 , setDate3] = useState(null);
let [date4 , setDate4] = useState(null);
let [date5 , setDate5] = useState(null);

let forecast = [
    {
       date: date1,
       temp:temp1,
       emoji:emoji1

    },
    {
       date: date2,
       temp:temp2,
       emoji:emoji2
    },
    {
        date: date3,
        temp:temp3,
        emoji:emoji3
    
    },
    {
        date: date4,
        temp:temp4,
        emoji:emoji4
    },
    {
        date: date5,
        temp:temp5,
        emoji:emoji5
    }
]


  function getData(response) {
    setDesc(response.data.weather[0].description);
    setTemp(response.data.main.temp);
    setHum(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setEmoji(response.data.weather[0].icon);


    getForecastData(response.data.coord.lon , response.data.coord.lat);

  }

  function getForecast(response){
    setTemp1(response.data.list[5].main.temp);
    setEmoji1(response.data.list[5].weather[0].icon);
    setDate1(response.data.list[5].dt);

    setTemp2(response.data.list[13].main.temp);
    setEmoji2(response.data.list[13].weather[0].icon);
    setDate2(response.data.list[13].dt);

    setTemp3(response.data.list[21].main.temp);
    setEmoji3(response.data.list[21].weather[0].icon);
    setDate3(response.data.list[21].dt);

    setTemp4(response.data.list[29].main.temp);
    setEmoji4(response.data.list[29].weather[0].icon);
    setDate4(response.data.list[29].dt);

    setTemp5(response.data.list[37].main.temp);
    setEmoji5(response.data.list[37].weather[0].icon);
    setDate5(response.data.list[37].dt);
    
  }


  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    setSubmit(false);
  }

  const APIKEY = `be81f193e065bf5feb2d944c7336968b`;



  if (submit === "start"){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    //setNewcity(city);
    axios.get(url).then(getData);
  }

  function searchCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    axios.get(url).then(getData);
    setNewcity(city);
    setSubmit(true);
    loadDate();

  }

  function getForecastData(lon , lat){
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    setNewcity(city);
    axios.get(forecastUrl).then(getForecast);
   
  }



  return (
    <div className="Search">
      <form onSubmit={searchCity}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={changeCity}
        ></input>
        <button type="submit" className="btn btn-primary" >Search</button>
      </form>

      <Weather day = {day} fullday = {fullday} date = {date} forecast = {forecast} city={newCity} submit={submit} temp={temp} desc= {desc} hum = {hum} wind = {wind} emoji = {emoji}/>
    </div>
  );
}
