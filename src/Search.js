import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Weather from "./Weather";

import "./App.css";

export default function Search() {


  //variables


  let [ready, setReady] = useState (false);
  let [forecastReady , setForecastReady] = useState(false);

  let [submit, setSubmit] = useState("start");

  let [date , setDate] = useState(null);
  let [day , setDay] = useState(null);
  let [fullday , setFullday] = useState(null);


  let [lon , setLon] = useState(null);
  let [lat , setLat] = useState(null);

  const APIKEY = `be81f193e065bf5feb2d944c7336968b`;




  let [city, setCity] = useState("London");
  let[newCity, setNewcity] = useState("London");


 
  
//date arrays
  let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
  


  //date function
  function loadDate() {
      let now = new Date();
      let fullday = now.getDate();
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

 

    //on window load
    MyComponent();

    function MyComponent() {
       useEffect(() => {
          loadData();
       }, []); // Pass an empty array to only call the function once on mount.
       
       function loadData() {
  
  
        if (submit === "start"){
          loadDate();
          makeCall();
        }
          // Fetch data or perform other loading logic here
       }
       
       // ... component render logic
    }




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

//forecast array of objects 

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


//get current weather response and call get forecast function

  function getData(response) {



    setDesc(response.data.weather[0].description);
    setTemp(response.data.main.temp);
    setHum(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setEmoji(response.data.weather[0].icon);


    setLon(response.data.coord.lon );
    setLat(response.data.coord.lat);

    setReady(true);

    setNewcity(response.data.name);

    console.log(response);

  }


  //get forecast response and set variables

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
    

    setForecastReady(true);
  }



  //change value of city when typed
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    setSubmit(false);
      
   
  }






//if search pressed search city
  function searchCity(event) {
    setSubmit(true);
    event.preventDefault();
  
      makeCall();
      getForecastData(lon, lat);
    
    
  }


//make call when submit



//make api call when searched button pressed

  function makeCall(){

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    //setNewcity(city);
    axios.get(url).then(getData);
   
    loadDate();
   
  }


  //get forecast data when searched pressed
  
  function getForecastData(lon , lat){
    if (submit){ 
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    setNewcity(city);
    axios.get(forecastUrl).then(getForecast);
   
  }
}



  if (ready){return (
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


  )}else {
    return(
    <div className="Search">
      <form onSubmit={searchCity}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={changeCity}
        ></input>
        <button type="submit" className="btn btn-primary" >Search</button>
      </form>

      <div className="text-center">Loading...</div>

    </div>
    )
  }
}
