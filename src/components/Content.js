import React, { useState, useEffect } from "react";
import axios from 'axios';
import Display from './Display';
import Cloudy from './cloudy.png';
import Sunny from './sun.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        height: 250,
        width: 250,
        margin: theme.spacing(1),
    },
    title:{
        textAlign: "center",
        padding: theme.spacing(1),
        margin: theme.spacing(2)
    },
    data:{
        textAlign: "center",
    }
}));

const myApiKey = '&appid=22620f188591f692e7d006b9aaebe1ac'

const Content = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    let displayUnits = Math.round(data.temperature)
    
    useEffect(() =>{
        let searchInUrl ='http://api.openweathermap.org/data/2.5/weather?q=';
        searchInUrl += props.byCity;
        searchInUrl += myApiKey;
        console.log(searchInUrl);
        axios
        .get(searchInUrl)
        .then( res => {
            console.log(res.data);
            var json = {temperature: res.data["main"]["temp"], weather: res.data.weather[0].main, 
                        description: res.data.weather[0].description}
            setData(json)
        })
        .catch(error => console.log(error));
    }, [props.byCity])


    let image, units, title, subtitle;
    if(props.byCity !== "Empty"){

        if (props.byUnits === "Cº")
            displayUnits = Math.round(data.temperature - 273.15)
        else if(props.byUnits === "ºF")
            displayUnits = Math.round((data.temperature - 273.15) * 9/5 + 32)
        
        let displayImage;
        if (data.weather === "Clear")
            displayImage = Sunny;
        else
            displayImage = Cloudy

        image = <img className={classes.image} src={displayImage} alt="Cloudy"/>
        units = <h2 className={classes.data}>{displayUnits} {props.byUnits}</h2>
        title = <h3 className={classes.data}>Now: {data.weather} </h3>
        subtitle  = <h4 className={classes.data}>{data.description}</h4>
    }

    return (
        <div>
            <div className={classes.title}>
                {props.byCity !== "Empty" &&
                    <Display className = "display" text = {props.byCity}/>
                }
            </div>
            <div>{image}</div>
            <div>{units}</div>
            <div>{title}</div>
            <div>{subtitle}</div>
        </div>
    );
};

export default Content;