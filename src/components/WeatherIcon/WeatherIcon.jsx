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
    backgroundColor: '#fff4f4',
    height: '100px',
    width: '100px',
  },
  avatar: {
    height: '100px',
    width: '100px',
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
