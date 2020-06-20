import React from 'react';

import WeatherGrid from '../../components/WeatherGrid';
import LocationForm from '../../components/LocationForm';

const Weather = () => {
  const searchZipcode = (zipcode) => {
    console.log(zipcode)
  };
  return (
    <div>
      <LocationForm searchZipcode={searchZipcode} />
    </div>
  );
};

export default Weather;
