import React , { useEffect } from  "react";
import { useState } from "react";

export default function Forecast(props){


    let src1 = `http://openweathermap.org/img/wn/${props.forecast[0].emoji}@2x.png`
    let src2 = `http://openweathermap.org/img/wn/${props.forecast[1].emoji}@2x.png`
    let src3 = `http://openweathermap.org/img/wn/${props.forecast[2].emoji}@2x.png`
    let src4 = `http://openweathermap.org/img/wn/${props.forecast[3].emoji}@2x.png`
    let src5 = `http://openweathermap.org/img/wn/${props.forecast[4].emoji}@2x.png`


MyComponent();

function MyComponent() {
   useEffect(() => {
      loadData();
   }, []); // Pass an empty array to only call the function once on mount.
   
   function loadData() {

    getDays();
    console.log(forecastdays);
      // Fetch data or perform other loading logic here
   }
   
   // ... component render logic
}

    let days = [
        "Mon",
        "Tue",
        "Wed",
        "Thurs",
        "Fri",
        "Sat",
        "Sun",
      ];

  


 

    let forecastdays = [];

    function loadDate() {
        let now = new Date();
        let day = days[now.getDay()];
    
        return(day);
      }

    function getDays(){


        let Day = loadDate();
        let indexday = days.indexOf(Day)

        console.log(Day , indexday);

        for (let step = 0; step < 5; step++) {
            // Runs 5 times, with values of step 0 through 4.

            if (indexday === 6){
                indexday = 0;
                let day = days[indexday];
                forecastdays.push(day); 
                
              }else{
                indexday = indexday+1
                let day = days[indexday];
                forecastdays.push(day); 
              }
          }

        setday1(forecastdays[0]);
        setday2(forecastdays[1]);
        setday3(forecastdays[2]);
        setday4(forecastdays[3]);
        setday5(forecastdays[4]);
        
    }
      

    let [ day1, setday1 ]= useState(null);
    let [ day2, setday2 ]= useState(null);
    let [ day3, setday3 ]= useState(null);
    let [ day4, setday4 ]= useState(null);
    let [ day5, setday5 ]= useState(null);
 

    

    if (forecastdays !== []) {return(
    <div className="Forecast">
        <div className="row">
            
            <div className="col-sm-2">
                <div className="day" >{day1}</div>
                <div className="img"><img src={src1} alt="" className="weathericon"></img></div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[0].temp)}</span>˚</div> 
            </div>
            <div className="col-sm-2">
                <div className="day">{day2}</div>
                <div className="img"><img src={src2} alt="" className="weathericon"></img></div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[1].temp)}</span>˚</div>

            </div>
            <div className="col-sm-2">
                <div className="day">{day3}</div>
                <div className="img"><img src={src3} alt="" className="weathericon"></img> </div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[2].temp)}</span>˚</div>

            </div>
            <div className="col-sm-2">
                 <div className="day">{day4}</div>
                 <div className="img"><img src={src4} alt="" className="weathericon"></img></div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[3].temp)}</span>˚</div> 

            </div>
            <div className="col-sm-2">
                <div className="day">{day5}</div>
                <div className="img"><img src={src5} alt="" className="weathericon"></img> </div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[4].temp)}</span>˚</div>

            </div>
           
        </div>

    </div>
    );
    }
}