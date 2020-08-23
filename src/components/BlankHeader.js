
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 64,
    color: 'transparent',
    //elevation: 0.0,
  },
}));

const BlankHeader = () => {
  const classes = useStyles();

  return (
    <div className ={classes.root}>
      <AppBar position="static" 
                className={classes.root} 
                color="transparent"
                elevation={0.0} 
                />
    </div>
  );
}

export default BlankHeader;