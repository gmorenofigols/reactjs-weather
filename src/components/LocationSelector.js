import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const locations = [
  {
    value: 'Copenhagen',
  },
  {
    value: 'Aarhus',
  },
  {
    value: 'Alborg',
  },
  {
    value: 'Odense',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const LocationSelector = (props) => {
    const classes = useStyles();
    const [city, setCity] = React.useState('Copenhagen');

    const handleChange = (event) => {
      setCity(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      props.handleSearch(city);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div>
                <TextField
                id="standard-select-city"
                select
                value="Select"
                value={city}
                onChange={handleChange}
                helperText="Please select a city"
                >
                {locations.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.value}
                    </MenuItem>
                ))}
                </TextField>
                <Button type="submit" variant = "outlined" color = "secondary">Search</Button>
            </div>
        </form>
    );
};

export default LocationSelector;