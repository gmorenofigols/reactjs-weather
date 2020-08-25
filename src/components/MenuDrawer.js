import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AssigmentTime from './AssignmentTimeline'
import AssignmentTime from './AssignmentTimeline';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
}));

const MenuDrawer = () => {
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        console.log("toggle Drawer");
        setDrawerOpen(!drawerOpen)
    }

    return (
        <div>
        <IconButton edge="start" className={classes.menuButton} onClick = {toggleDrawer} color="inherit">
            <MenuIcon />
        </IconButton>
        <Drawer open = {drawerOpen} onClose = {toggleDrawer}>
              <div className = {classes.list}>
                <AssignmentTime/>
              </div>
         </Drawer>
        </div>
    )
}

export default MenuDrawer;