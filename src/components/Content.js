import React from 'react';
import axios from 'axios';
import Display from './Display';

axios
  .get('/weather?q=Londonuk&appid=439d4b804bc8187953eb36d2a8c26a02')
  .then( response => {
    console.log(response.data);
})

const Content = (props) => {

    return (
        <div>
            <Display text = {props.byCity}/>
        </div>
    );
};

export default Content;