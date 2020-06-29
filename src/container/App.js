import React, { Component } from 'react';
import 'tachyons';
import Coordinates from '../components/coordinates'
import './app.css'
class app extends Component {
    constructor() {
        super()
        this.state = {
            latitude: "",
            longitude: "",

        }
    }
    componentDidMount() {
        setInterval(() => {
            fetch('http://api.open-notify.org/iss-now.json')
                .then(resp => resp.json())
                .then(obj => {
                    this.setState({ latitude: obj.iss_position.latitude })
                    this.setState({ longitude: obj.iss_position.longitude })
                })
        }, 1000);

    }

    render() {

        const { longitude, latitude } = this.state
        console.log(longitude.length===0)
        if (longitude.length === 0 || latitude.length === 0) { return <h1 className='tc'>PLEASE WAIT</h1> }
        else {
            return (
                <div className='tc'>
                    <h1 >THIS SITE WILL SHOW YOU THE COORDINATES OF THE INTERNATIONAL SPACE STATION EVERY SECOND</h1>
                    <Coordinates longitude={longitude} latitude={latitude} />
                </div>
            )
        }
    }
}

export default app;