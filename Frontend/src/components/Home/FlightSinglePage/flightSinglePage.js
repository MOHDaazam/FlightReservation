import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FlightIcon from '@material-ui/icons/Flight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import GroupIcon from '@material-ui/icons/Group';
import { Form } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import './flightSinglePage.css'

class FlightSinglePage extends Component {
    titles = [
        { key: 'm', text: 'Title', value: '' },
        { key: 'f', text: 'Mr', value: 'Mr' },
        { key: 'o', text: 'Ms', value: 'Ms' },
        { key: 'o', text: 'Mrs', value: 'Mrs' },
    ]





    render() {

        return (
            <Dialog
                open={this.props.status}
                onClose={this.props.handleClose}
                fullScreen
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <div className='row page-title-row'>
                        <div className='col-9 '>
                            <span className='book-page-title'>Include some details</span>
                        </div>
                        <div className='col-3 d-flex justify-content-end'>
                            <IconButton aria-label="close" onClick={this.props.handleClose} >
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>

                </DialogTitle>
                <DialogContent dividers={'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"

                        tabIndex={-1}
                    >
                        <div className='fd'>
                            <div className='fd-section-1'>
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
                                            <span className='flight-icon-2'><FlightIcon /></span>
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
                                                <div className='col d-flex justify-content-center'>
                                                    <div className='center-icon'>
                                                        <div className='plane-icon-middle'>
                                                            <FlightTakeoffIcon />
                                                        </div>
                                                        <div className='circle-hollow flex-row'></div>
                                                    </div>
                                                </div>
                                                <div className='col d-flex justify-content-center'>
                                                    <div className='dot-right'></div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col d-flex justify-content-center '>
                                                    <div className='ticket-type'>NON-REFUNDABLE</div>
                                                </div>
                                            </div>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                            <div className='fd-section-2'>
                                <ExpansionPanel expanded>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <div className='fd-h'>
                                            <span className='thumb-icon'><ThumbUpIcon /></span>
                                            <div className='d-flex flex-column block-good'>
                                                <span className='fd-h-sub-2 p-2'>Good to Know</span>
                                                <span className='fd-p-sub p-2'>Information you should know</span>
                                            </div>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div className='gd-details'>
                                            <ul>
                                                <li>1 PC per passenger Check-in Baggage included for your selected flight on the sector Delhi to Bangalore</li>
                                                <li>Airline Cancellation Fee is Non-Refundable per passenger for your selected flight on the sector Delhi to Bangalore</li>
                                            </ul>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                            <div className='fd-section-3'>
                                <ExpansionPanel expanded>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <div className='fd-h'>
                                            <span className='group-icon'><GroupIcon /></span>
                                            <div className='d-flex flex-column block-good'>
                                                <span className='fd-h-sub-2 p-2'>Travellers Details</span>
                                                <span className='fd-p-sub p-2'>Name should be same as in Goverment ID proof</span>
                                            </div>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Form>
                                            <Form.Group >
                                                <Form.Select
                                                    width={2}
                                                    fluid
                                                    label='Title'
                                                    options={this.titles}
                                                    placeholder='Title'
                                                />
                                                <Form.Input fluid label='First Name (& middle name if any)' placeholder='Enter  First name' width={7} />
                                                <Form.Input fluid label='Last name' placeholder='Enter Last name' width={7} />
                                            </Form.Group>
                                        </Form>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                            <div className='fd-section-4'>
                                <div className='row'>
                                    <div className='col-md-6 col-sm-12 coupon-column'>
                                        <ExpansionPanel expanded>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <div className='fd-h' style={{ marginTop: '10px' }}>
                                                    <span className='coupon-icon'><LocalOfferIcon /></span>
                                                    <span className='fd-h-sub'>Have a coupon code ? </span>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <div className='coupon-input'>
                                                    <input type='text' placeholder='Enter coupon code' />
                                                </div>
                                                <hr />
                                                <div className='coupons'>
                                                    <div className='coupon'>
                                                        <Radio
                                                            checked={true}
                                                            // onChange={handleChange}
                                                            value="a"
                                                            label='azam'

                                                        />
                                                        <span className='label'>FLIGHT247</span>
                                                    </div>
                                                    <hr />
                                                    <div className='coupon'>
                                                        <Radio
                                                            checked={true}
                                                            // onChange={handleChange}
                                                            value="a"
                                                            label='azam'

                                                        />
                                                        <span className='label'>FLIGHT247</span>
                                                    </div>
                                                    <hr />
                                                    <div className='coupon'>
                                                        <Radio
                                                            checked={true}
                                                            // onChange={handleChange}
                                                            value="a"
                                                            label='azam'

                                                        />
                                                        <span className='label'>FLIGHT247</span>
                                                    </div>
                                                    <hr />
                                                    <div className='coupon'>
                                                        <Radio
                                                            checked={true}
                                                            // onChange={handleChange}
                                                            value="a"
                                                            label='azam'

                                                        />
                                                        <span className='label'>FLIGHT247</span>
                                                    </div>


                                                </div>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                                    <div className='col-md-6 col-sm-12 price-column'>
                                        <ExpansionPanel expanded>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <div className='fd-h'>
                                                    <span className='rupee-icon'>₹</span>
                                                    <span className='fd-h-sub'>Price Summary</span>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <div className='row'>
                                                <div className='col float-left'>
                                                    <span className='ps-txt-left'>Traveller x 1</span>
                                                </div>
                                                <div className='col d-flex justify-content-center'>
                                                    <span className='ps-txt-right'>₹ 4000</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='row'>
                                                <div className='col float-left'>
                                                    <span className='ps-txt-left'>Total Taxes</span>
                                                </div>
                                                <div className='col d-flex justify-content-center'>
                                                    <span className='ps-txt-right'>₹ 597</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='row'>
                                                <div className='col float-left'>
                                                    <span className='ps-txt-left'>Discount</span>
                                                </div>
                                                <div className='col d-flex justify-content-center'>
                                                    <span className='ps-txt-right'>₹ 299</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='row'>
                                                <div className='col'>
                                                    <span className='ps-txt-grand-title'>Grand Total</span>
                                                </div>
                                                <div className='col '>
                                                    <span className='ps-txt-grand-price'>₹ 5000</span>
                                                </div>
                                            </div>
                                            <ExpansionPanelDetails>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        // onClick={handleClose} 
                        color="primary">
                        Cancel
          </Button>
                    <Button
                        //  onClick={handleClose} 
                        color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>

        )
    }
}
export default FlightSinglePage;