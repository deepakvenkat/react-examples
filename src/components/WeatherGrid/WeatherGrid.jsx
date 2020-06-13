import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import WeatherCard from '../WeatherCard';

const styles = {};

const WeatherGrid = (({ days }) => {
  const weatherCardsList = days.map((day) => (
    <WeatherCard
      day={day.day}
      high={day.high}
      low={day.low}
      weather={day.weather}
      key={day.day}
    />
  ));
  return (
    <div>
      {weatherCardsList}
    </div>
  );
});

WeatherGrid.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  // TODO: Extract `day` to a common proptype
  days: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(styles)(WeatherGrid);
