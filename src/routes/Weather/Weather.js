import React from 'react';

import WeatherGrid from '../../components/WeatherGrid';
import LocationForm from '../../components/LocationForm';

import { getLatAndLong } from '../../api/Zipcode';

const Weather = () => {
  const searchZipcode = async (zipcode) => {
    const resLatLong = await getLatAndLong({ zipcode });
    // TODO: add error handler
  };
  return (
    <div>
      <LocationForm searchZipcode={searchZipcode} />
    </div>
  );
};

export default Weather;
