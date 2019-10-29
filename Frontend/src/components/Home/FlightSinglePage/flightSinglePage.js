import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FlightIcon from '@material-ui/icons/Flight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import './flightSinglePage.css'

class FlightSinglePage extends Component {
    render() {
        return (
            <div className='fd'>
                <ExpansionPanel expanded>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className='fd-h'>
                            <span className='flight-icon'><FlightTakeoffIcon /></span>
                            <span className='fd-h-sub'>Flight Details</span>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className='fd-desc-1'>
                            <span className='flight-icon'><FlightIcon /></span>
                            <span className='fd-cities'>Delhi - Hyderabad | </span>
                            <span className='fd-date'>Tue 29 OCT</span>
                        </div>
                        <div className='fd-desc-2'>
                            <div className='row no-gutters'>
                                <div className='col  d-flex justify-content-center'>
                                    <span className='depCity-code'>DEL <span className='time-dep'>20:40</span></span>
                                </div>
                                <div className='col d-flex justify-content-center'>
                                    <span className='duration'>2h 40m</span>
                                </div>
                                <div className='col  d-flex justify-content-center'>
                                    <span className='arrCity-code'>DEL  <span className='time-arr'>20:40</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='divider-sec'>
                            <div className='row'>
                                <hr />
                            </div>
                            <div className='row'>
                                <div className='col d-flex justify-content-center'>
                                    <div className='dot-left'></div>
                                </div>
                                <div className='col flex-column'>
                                    <div className='center-icon'>
                                        <div className='flex-row'>
                                            <FlightTakeoffIcon />
                                        </div>
                                        <div className='circle-hollow flex-row'></div>
                                    </div>
                                </div>
                                <div className='col d-flex justify-content-center'>
                                    <div className='dot-right'></div>
                                </div>
                                {/* <div className='row'>
                                    <div className='center-plane d-flex justify-content-center '>
                                        <FlightTakeoffIcon />
                                    </div>
                                </div> */}
                            </div>



                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}
export default FlightSinglePage;