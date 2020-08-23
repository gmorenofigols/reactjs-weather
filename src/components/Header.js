
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    backgroundColor: '#2196f3',
  },
  headerTransparent: {
    backgroundColor: 'transparent',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [headerBackground, setHeaderBackground] = useState('headerColour');
  const [thresholdScroll, setThresholdScroll] = useState(0);

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

  return (
    <div className ={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title} color="secondary">
            Open Weather Assignment
          </Typography>
          <Button color="primary">About me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;