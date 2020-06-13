import React from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  searchButton: {
    marginTop: '12px',
    marginLeft: '10px',
  }
};

const LocationForm = ({ classes }) =>  (
  <form>
    <TextField label="Zip Code" />
    <Button
      disableElevation
      variant="contained"
      className={classes.searchButton}
    >
      Search
    </Button>
  </form>
);

LocationForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(LocationForm);
