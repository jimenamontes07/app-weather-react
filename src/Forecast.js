import React , { useEffect } from  "react";
import { useState } from "react";

export default function Forecast(props){
    console.log(props.forecast);
    
    

MyComponent();

function MyComponent() {
   useEffect(() => {
      loadData();
   }, []); // Pass an empty array to only call the function once on mount.
   
   function loadData() {

    getDays();
    //console.log(forecastdays);
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
        //console.log(Day , indexday);

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
 

    

if (forecastdays != null) {return(
    <div className="Forecast">
        <div className="row">
            
            <div className="col-sm-2">
                <div className="day" >{day1}</div>
                <div className="img"><img src={props.forecast[0].icon} alt="" className="weathericon"></img></div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[0].temp)}</span>˚</div> 
            </div>
            <div className="col-sm-2">
                <div className="day">{day2}</div>
                <div className="img"><img src={props.forecast[1].icon} alt="" className="weathericon"></img></div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[1].temp)}</span>˚</div>

            </div>
            <div className="col-sm-2">
                <div className="day">{day3}</div>
                <div className="img"><img src={props.forecast[2].icon} alt="" className="weathericon"></img> </div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[2].temp)}</span>˚</div>

            </div>
            <div className="col-sm-2">
                 <div className="day">{day4}</div>
                 <div className="img"><img src={props.forecast[3].icon} alt="" className="weathericon"></img></div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[3].temp)}</span>˚</div> 

            </div>
            <div className="col-sm-2">
                <div className="day">{day5}</div>
                <div className="img"><img src={props.forecast[4].icon} alt="" className="weathericon"></img> </div>
                <div className="dayTemp"> <span>{Math.round(props.forecast[4].temp)}</span>˚</div>

            </div>
           
        </div>

    </div>
    );
    }
}
