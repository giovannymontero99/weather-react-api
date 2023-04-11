import React from 'react';
import './DataTarget.css';

const DataTarget = (data) => {
  return (
    <div className="Target">
      <div className="target-name">
        {data.name}, {data.country}
      </div>
      <div className="target-icon">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="logo"
        />
        <div>{data.description}</div>
      </div>
      <div className="target-temp">
        Temperature: <span>{(data.temperature - 273.15).toFixed(1)}C°</span>
      </div>
    </div>
  );
};

export default DataTarget;
