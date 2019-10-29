import React, { Component } from 'react';
import Airplane from './Images/airplanes.png'
import './FlightAnimation.css'


class FlightAnimation extends Component {
    render() {
        console.log(this.props)
        return (
            <div id="clouds">
                <div className="cloud x1"></div>
                <div className="cloud x2"></div>
                <div className="cloud x3"></div>
                <div className="cloud x4"></div>
                <div className='fa-details'>
                    <div className='text-1'>
                        Fasten your seatbelts
                    </div>
                    <div className='text-2'>
                        Loading best fares...
                    <hr />
                    </div>
                    <div className='text-3'>
                        <span className='fa-a-city'>{this.props.depCity.replace('%20', ' ')}</span>
                        {
                            this.props.trip === 'One-way' ?
                                < span className="fa fa-long-arrow-right fa-FA1" aria-hidden="true"></span> :
                                <span className="fa fa-exchange fa-FA2" aria-hidden="true"></span>
                        }
                        <span className='fa-d-city'>{this.props.arrCity.replace('%20', ' ')}</span>
                    </div>
                </div>
                <div className="cloud x5"></div>
                <div className="cloud x6"></div>
                <div className="cloud x7"></div>
                <div>
                    <img className='plane top' src={Airplane} />
                </div>
            </div >
        )
    }
}
export default FlightAnimation;