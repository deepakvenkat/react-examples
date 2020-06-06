import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import WeatherIcon from '../WeatherIcon';
const styles = {
  root: {
    width: '125px',
    height: '200px',
    textAlign: 'center',
  },
  temp: {
    display: 'inline-block',
  },
};

const WeatherCard = ({
  classes,
  day,
  high,
  low,
  weather,
}) =>  (
  <Card
    classes={classes}
  >
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {day}
      </Typography>
      <WeatherIcon weather={weather} />
      <br />
      <Typography component="p" className={classes.temp}>
        {high}/
      </Typography>
      <Typography color="textSecondary" component="p" className={classes.temp}>
        {low}
      </Typography>
    </CardContent>
  </Card>
);

WeatherCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  day: PropTypes.string.isRequired,
  high: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

export default withStyles(styles)(WeatherCard);
