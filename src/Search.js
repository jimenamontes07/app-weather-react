import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Weather from "./Weather";

import "./App.css";

export default function Search() {


  //variables


  let [ready, setReady] = useState (false);
  //let [forecastReady , setForecastReady] = useState(false);

  let [submit, setSubmit] = useState("start");



  let [date , setDate ] = useState([]);

  const APIKEY = `4da2e8bf3a200c5adda75dotf32bef74`;




  let [city, setCity] = useState("London");


 
  
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
    
      setDate([
      (fullday),
       (time),
     (day)
      ])

      
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

let [currentWeatherData , setCurrentWeatherData] = useState({});


//for forecast

let[forecast , setForecast ] = useState({});


//forecast array of objects 




//get current weather response and call get forecast function

  function getData(response) {


    setCurrentWeatherData({
      city:response.data.city,
      desc :response.data.condition.description,
      temp : response.data.temperature.current,
      hum : response.data.temperature.humidity,
      wind :response.data.wind.speed ,
      icon:response.data.condition.icon_url,
      lon:response.data.coordinates.longiude ,
      lat:response.data.coordinates.latitude
    })



    console.log(currentWeatherData);
    setReady(true);


    console.log(response);

  }


  //get forecast response and set variables

  function getForecast(response){

    setForecast (
      {
         date: response.data.daily[0].time ,
         temp: response.data.daily[0].temperature.day,
         emoji:response.data.daily[0].condition.icon_url
  
      },
      {
         date: response.data.daily[1].time ,
         temp:response.data.daily[1].temperature.day,
         emoji:response.data.daily[1].condition.icon_url
      },
      {
          date: response.data.daily[2].time ,
          temp:response.data.daily[2].temperature.day,
          emoji:response.data.daily[2].condition.icon_url
      
      },
      {
          date: response.data.daily[3].time ,
          temp:response.data.daily[3].temperature.day,
          emoji:response.data.daily[3].condition.icon_url
      },
      {
          date: response.data.daily[4].time ,
          temp:response.data.daily[4].temperature.day,
          emoji:response.data.daily[4].condition.icon_url
      }
    )
    

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
   

    
    
  }


//make call when submit



//make api call when searched button pressed

  function makeCall(){

    getCurrentWeather();
    getForecastData();
    loadDate();
   
  }


  function getCurrentWeather(){
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${APIKEY}&units=metric`;
    //setNewcity(city);
    axios.get(url).then(getData);
  }

  //get forecast data when searched pressed
  
  function getForecastData(){
    if (submit){ 
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${APIKEY}&units=metric`;

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

      <Weather date = {date} forecast = {forecast} submit={submit} currentWeather = {currentWeatherData}/>
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
