import React , {useState} from "react";


export default function Temp(props){

    const [temp, setTemp] = useState(props.temp);

    let [celcius , setCelcius] = useState(true);


    if (celcius === true && temp !== props.temp){
        setTemp(props.temp);
    } 
  
    function toFarhenheit(event) {
      event.preventDefault();
      setCelcius(false);
        let temperature = Math.round(temp * (9 / 5) + 32);
        setTemp(temperature);
      }

    function toCelcius(event) {
        setCelcius(true);
       event.preventDefault();
   
         }

    return(
        <span>
        <span className="Temp">{Math.round(temp)}</span>

        <span className="buttonsCelFar">
        <button className="btn btn-light" id="toCelcius" onClick={toCelcius}>
        {" "}
        °C{" "}
        </button>

        <button className="btn btn-light" id="toFarenheit" onClick={toFarhenheit} >
        {" "}
        °F{" "}
         </button>
        </span>
        </span>

    )
}