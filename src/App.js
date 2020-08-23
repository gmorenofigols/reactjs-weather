import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import { Grid } from "@material-ui/core";
import BlankHeader from './components/BlankHeader';
import LocationSelector from './components/LocationSelector';
import Content from './components/Content';

const App = () => {
  const [location, setLocation] = useState('Empty');

  return (
    <Grid container direction="column">
      <Grid item>
        <BlankHeader />
      </Grid>
      <Grid item>
        <Header />
      </Grid>
      <Grid container item lg={12} justify="center" alignItems="center">
        <h1>Search weather by city</h1>
      </Grid>
      <Grid container item lg={12} justify="center" alignItems="center">
        <LocationSelector handleSearch={setLocation}/>
      </Grid>
      <Grid container item lg={12} justify="center" alignItems="center">
        <Content byCity={location}/>
      </Grid>
    </Grid>
  );
}

export default App;