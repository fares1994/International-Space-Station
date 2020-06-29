import React from 'react';
import './coordinates.css'
const coordinates = ({ latitude, longitude, error }) => {
        return (

            <ul >
                <li>latitude:{latitude}</li>
                <li>longitude:{longitude}</li>
            </ul>)  
}
    export default coordinates;