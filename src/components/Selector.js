import React from "react";

import { useWeather } from "../context/WeatherContext";

function Selector() {
  const { cities, activeCity, setActiveCity, datas } = useWeather();
  
  return (
    <div>
      <select
        defaultValue={activeCity}
        onChange={(e) => setActiveCity(e.target.value)}
      >
        {cities.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <span> {datas.resolvedAddress} </span>
    </div>
  );
}

export default Selector;
