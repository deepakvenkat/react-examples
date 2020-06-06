import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  first: {
    position: 'absolute',
    // clip: rect(top, right, bottom, left)
    backgroundImage: (props) => (`url(\'/public/icons/${props.weather}.png\')`),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: 'rgba(#f6f6f6, 0.1)',
    height: '75px',
    width: '75px',
  },
  avatar: {
    height: '75px',
    width: '75px',
    margin: '0 auto',
  },
};

const WeatherIcon = ({
  classes,
}) => (
  <Avatar
    variant="square"
    className={classes.avatar}
  >
    <div className={classes.first}></div>
  </Avatar>
);

WeatherIcon.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  weather: PropTypes.string.isRequired,
};

export default withStyles(styles)(WeatherIcon);
