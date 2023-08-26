import React from "react";
import Temp from "./Temp"

export default function CurrentTemp(props){




return(
    <div className="CurrentTemp">


        <div className="row">
            <div className="col-6 mainTemp">
            <div>
                <img className="icon" src={props.emoji} alt= {props.desc} />{" "} 

                <Temp temp = {props.temp} submit = {props.submit}/>
           
               

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