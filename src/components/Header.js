
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerColour: {
    backgroundColor: '#8bc34a',
  },
  headerTransparent: {
    backgroundColor: 'transparent',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [headerBackground, setHeaderBackground] = useState('headerColour');
  const [thresholdScroll, setThresholdScroll] = useState(0);
  const [units, setUnits] = useState("K")

  const navRef = React.useRef();
  navRef.current = headerBackground;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (thresholdScroll < currentScrollY) {
        setThresholdScroll(currentScrollY);
        setHeaderBackground('headerTransparent');
      }else{
        setThresholdScroll(currentScrollY);
        setHeaderBackground('headerColour');
      }
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [thresholdScroll]);

  const handleClick = () =>{
    if(units === "K")
      setUnits("Cº")
    else if(units === "Cº")
      setUnits("ºF")
    else
      setUnits("K")
  }

  useEffect(() => {
    props.handleDisplayUnits(units)
  }, [units, props]);

  return (
    <div className ={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <MenuDrawer/>
          <Typography variant="h5" className={classes.title} color="secondary">
            Open Weather Assignment
          </Typography>
          <Button color="primary" onClick={handleClick} startIcon={<AutorenewIcon/>}>
            Units: {units}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;