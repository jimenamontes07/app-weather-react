import React , {useState} from "react";


export default function Temp(props){

    const [temp, setTemp] = useState(props.temp);

    let [celcius , setCelcius] = useState(true);

    let [colorC , setColorC] = useState("#0C6EFD");
    let [colorF , setColorF] = useState("black");


    if (celcius === true && temp !== props.temp){
        setTemp(props.temp);
        setColorC("#0C6EFD");
        setColorF("black");
    } 
  
    function toFarhenheit(event) {
      event.preventDefault();
      if (celcius === true){
      setCelcius(false);
      setColorC("black");
      setColorF("#0C6EFD");
        let temperature = Math.round(temp * (9 / 5) + 32);
        setTemp(temperature);
      }
    }

    function toCelcius(event) {
        setCelcius(true);
       event.preventDefault();
   
         }

    return(
        <span>
        <span className="Temp">{Math.round(temp)}</span>

        <span className="buttonsCelFar">
        <button className="btn btn-light" id="toCelcius" onClick={toCelcius} style={{color: colorC }} >
        {" "}
        °C{" "}
        </button>

        <button className="btn btn-light" id="toFarenheit" onClick={toFarhenheit} style={{color: colorF }}>
        {" "}
        °F{" "}
         </button>
        </span>
        </span>

    )
}