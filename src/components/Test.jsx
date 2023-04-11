import React, { useEffect, useState } from 'react';
import DataTarget from './Target/DataTarget';
import TargetError from './Target/TargetError';
import SearchButton from './SearchButton';
import './Test.css';

const Test = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);
  const [searchCity, setSearchCity] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30a41206416fa928ade86c7a29b6b030`
        );
        if (!response.ok) return setData(null);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };
    getApi();
  }, [searchCity]);

  return (
    <div className="Test">
      <SearchButton
        setSearchCity={setSearchCity}
        setCity={setCity}
        searchCity={searchCity}
      />
      {!data ? (
        <TargetError />
      ) : (
        <DataTarget
          name={data.name}
          country={data.sys.country}
          icon={data.weather[0].icon}
          description={data.weather[0].description}
          temperature={data.main.temp}
        />
      )}
    </div>
  );
};

export default Test;
