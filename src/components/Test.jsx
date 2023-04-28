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
        if (city === null) return;
        const response = await fetch(
          // API KEY !!
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6fe050ced099d0d2bf4459f01ccc685`
        );
        if (!response.ok) return setData(true);
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
      {data === null ? (
        <></>
      ) : data === true ? (
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
