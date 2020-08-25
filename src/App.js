import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import { Grid } from "@material-ui/core";
import BlankHeader from './components/BlankHeader';
import LocationSelector from './components/LocationSelector';
import Content from './components/Content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: '100%',
    minHeight: 800,
  },
  footer: {
    background: 'grey',
    minHeight: 200,
    color: 'white',
    textAlign: 'center',
  },
});

const App = () => {
  const classes = useStyles();
  const [location, setLocation] = useState('Empty');
  //by default from the API
  const [displayUnits, setDisplayUnits] = useState('K')

  return (
    <div>
    <Grid className = {classes.root} container direction="column">
      <Grid item>
        <BlankHeader />
      </Grid>
      <Grid item>
        <Header handleDisplayUnits = {setDisplayUnits} />
      </Grid>
      <Grid container item lg={12} justify="center" alignItems="center">
        <h1>Search weather by city</h1>
      </Grid>
      <Grid container item lg={12} justify="center" alignItems="center">
        <LocationSelector handleSearch={setLocation}/>
      </Grid>
      <Grid container item lg={12} justify="center" alignItems="center">
        <Content byCity={location} byUnits={displayUnits}/>
      </Grid>
    </Grid>
    <Grid className = {classes.footer} container direction="column">
        <h2>This is supposed to be the footer</h2>
    </Grid>
    </div>
  );
}

export default App;