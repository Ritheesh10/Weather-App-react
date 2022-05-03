import { Axios } from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";

 const api = {
   key: "f02218e9c2c3bd3c56f9e93f68aebd7d",
   base: "https://api.openweathermap.org/data/2.5/",
 }; 


function Weather() {
    const [state, setState] = useState('')
    const [weather, setWeather] = useState([])
    

  let fetchLocation =  async(e) => {
      e.preventDefault()
  let data=await  fetch(
      `${api.base}weather?q=${state}&appid=${api.key}`
      )
      
      let fdata=await data.json()
      setWeather(fdata)
      setState('')
      console.log(fdata);
      
      
    };
    
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    let day = days[d.getDay()];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const m = new Date();
    let month = months[m.getMonth()];

  return (
    <section>
      <div className="appdiv">
        <form action="" onSubmit={fetchLocation}>
          <input
            value={state}
            type="text"
            onChange={e => setState(e.target.value)}
            placeholder="Enter Location"
          />
        </form>
        {typeof weather.name == "undefined" ? (
          ""
        ) : (
          <>
            <div className="output">
              <h1>
                {weather.name},{weather.sys.country}
              </h1>
              <h5>
                {day}, {month}
              </h5>
              <div className="temperature">
                  <h1>{ Math.round((weather.main.temp)-273.15)}</h1>
                <span>
                  <sup>°</sup>C
                </span>
              </div>
              <h4>{weather.weather[0].description}</h4>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Weather;
