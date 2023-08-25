import React, { useState} from "react";
import { useEffect } from "react";

export default function CurrentTemp(props){

    //let [temp, setTemp] = useState(props.temp);

  


  
    //function toFarhenheit(event) {
      // event.preventDefault();
        //let temperature = Math.round(temp * (9 / 5) + 32);
        //setTemp(temperature);
      //}

    //function toCelcius(event) {
       // event.preventDefault();
      // let temperature = props.temp;
       // setTemp(temperature);
   
     // }


return(
    <div className="CurrentTemp">


        <div className="row">
            <div className="col-6 mainTemp">
            <div>
                <img className="icon" src={props.emoji} alt= {props.desc} />{" "} 
                <span className="Temp">{Math.round(props.temp)}</span>
                <span className="buttonsCelFar">
                <button className="btn btn-light" id="toCelcius" onClick={toCelcius}>
                {" "}
                °C{" "}
                </button>

                <button className="btn btn-light" id="toFarenheit"  onClick={toFarhenheit}>
                {" "}
                °F{" "}
                 </button>
                </span>

                </div> 
            </div>
            <div className="col-6 HumAndWind" >
                <div className="info">Humidity: {props.hum} %</div>
                 <div className="info">Wind: {props.wind} km/h </div>

            </div>
        </div>
    </div>
    );

}