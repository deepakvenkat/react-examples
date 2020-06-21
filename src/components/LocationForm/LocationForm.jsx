import React, { useState } from 'react';
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

const LocationForm = ({ classes, searchZipcode }) =>  {
  const [zipcode, setZipcode] = useState();

  const onSearch = (e) => {
    e.preventDefault();
    if (zipcode.length !== 5) {
      // TODO: show error
    }
    searchZipcode(zipcode);
  }
  const inputOnChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const value = e.target.value;
    if(e.key === 'Enter') {
      // TODO: this is not working
      if (zipcode.length !== 5) {
        // TODO: show error
      }
      searchZipcode(zipcode);
    } else {
      // TODO: set zipcode only if it is number;
      if (value.length <= 5) {
        setZipcode(e.target.value);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.stopPropagation();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Zip Code"
        value={zipcode}
        onChange={inputOnChange}
        type="number"
        name="zipcode"
      />
      <Button
        disableElevation
        variant="contained"
        className={classes.searchButton}
        onClick={onSearch}
      >
        Search
      </Button>
    </form>
  );
};

LocationForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  searchZipcode: PropTypes.func.isRequired,
};

export default withStyles(styles)(LocationForm);
