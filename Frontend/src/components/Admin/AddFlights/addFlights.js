import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { Dropdown, Input, Button, Modal } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import { airportsData, airlines } from '../../../airports';
import Axios from 'axios';
import { URL } from '../../Utils/util'
import './addFlights.css'

class AddFlights extends Component {

    Airports = []
    Airlines = []


    state = {
        flightNumber: '',
        departureCity: '',
        arrivalCity: '',
        departureDate: '',
        arrivalDate: '',
        departureTime: '',
        arrivalTime: '',
        operatingAirlines: '',
        ticketFare: '',
        dataAdded: false,
        modalSuccessOpen: false,
        modalFailedOpen: false,
        submitError: ''
    }
    date = {
        unformattedDate1: new Date,
        unformattedDate2: new Date,
    }

    //Format date to yyy-MM-dd
    formatDate = (dateString) => {
        let date = new Date(dateString),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    componentDidMount = () => {
        //fetching list of indian airports with cities 
        airportsData.airports.map((data, i) => {
            this.Airports.push({
                key: data.IATA_code,
                value: data.IATA_code,
                text: data.airport_name + ', ' + data.city_name
            })
        })
        //fetching list of airlines
        Object.keys(airlines).forEach((key) => {
            this.Airlines.push({
                key: key,
                value: airlines[key],
                text: airlines[key]
            })
        })
        //Adding current date to state
        const formattedDate = this.formatDate(this.date.unformattedDate1)
        if (this.state.departureDate === '')
            this.setState({ departureDate: formattedDate, arrivalDate: formattedDate })
        else
            return null;


    }


    handleDepartureCity = (e, { value }) => {
        this.setState({ departureCity: value })
    }
    handleArrivalCity = (e, { value }) => {
        this.setState({ arrivalCity: value })
    }
    handleFlightNumber = (event) => {
        let flightNumber = event.target.value
        this.setState({ flightNumber })
    }
    handleTicketFare = (event) => {
        let ticketFare = event.target.value
        this.setState({ ticketFare })

    }
    handleDepartureDate = (date) => {
        const formattedDate = this.formatDate(date)
        this.setState({
            unformattedDate1: date,
            departureDate: formattedDate
        })
    }
    handleArrivalDate = (date) => {
        const formattedDate = this.formatDate(date)
        this.setState({
            unformattedDate2: date,
            arrivalDate: formattedDate
        })
    }
    handleDepartureTime = (time) => {
        this.setState({
            departureTime: time
        })

    }
    handleArrivalTime = (time) => {
        this.setState({
            arrivalTime: time
        })

    }

    handleOperatingAirlines = (e, { value }) => {
        this.setState({ operatingAirlines: value })

    }

    formValid = () => {
        if (this.state.departureCity && this.state.arrivalCity &&
            this.state.departureDate && this.state.arrivalDate &&
            this.state.departureTime && this.state.arrivalTime &&
            this.state.flightNumber && this.state.ticketFare &&
            this.state.operatingAirlines !== '')
            return true
        else
            return false

    }
    closeModal = () => {
        this.setState({
            modalSuccessOpen: false,
            modalFailedOpen: false
        })
    }
    refreshPage() {
        this.setState({
            flightNumber: '',
            departureCity: '',
            arrivalCity: '',
            departureDate: '',
            arrivalDate: '',
            departureTime: '',
            arrivalTime: '',
            operatingAirlines: '',
            ticketFare: '',
            dataAdded: false,
            modalOpen: false,
            submitError: ''
        })
    }
    pushToAddFlight = () => {
        this.refreshPage()
        this.closeModal()

    }


    submitForm = (event) => {

        event.preventDefault()
        let dataToSubmit = {}
        if (this.formValid)

            dataToSubmit = {
                flightNumber: this.state.flightNumber,
                departureCity: this.state.departureCity,
                arrivalCity: this.state.arrivalCity,
                departureDate: this.state.departureDate,
                arrivalDate: this.state.arrivalDate,
                departureTime: this.state.departureTime,
                arrivalTime: this.state.arrivalTime,
                operatingAirlines: this.state.operatingAirlines,
                ticketFare: this.state.ticketFare,
            }
        Object.keys(this.state).forEach((key) => {
            dataToSubmit[key] = this.state[key]
        })

        console.log(dataToSubmit)
        //  Submitting data to backend
        Axios.post(URL + '/saveFlights', dataToSubmit)
            .then(response => this.setState({
                dataAdded: true,
                modalSuccessOpen: true
            }),
                error => this.setState({
                    modalFailedOpen: true
                }),




            )






    }





    render() {
        //  console.log(this.state.modalOpen)

        return (
            <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                <h4 className='text-center title'>ADD FLIGHT</h4>
                <form onSubmit={this.submitForm}>
                    <label className='labelText'>Operating Airlines </label>
                    <Dropdown
                        placeholder='Select Airlines'
                        fluid
                        search
                        selection
                        value={this.state.operatingAirlines}
                        options={this.Airlines}
                        onChange={this.handleOperatingAirlines}
                    />
                    <div className='row'>
                        <div className='col'>
                            <label className='labelText'>Flight Number </label><br></br>
                            <Input
                                placeholder='Enter Flight Number '
                                onChange={this.handleFlightNumber}
                                value={this.state.flightNumber}
                            />
                        </div>
                        <div className='col col_ticket_fare' >
                            <label className='labelText'>Ticket Fare </label><br></br>
                            <Input
                                placeholder='Enter Ticket Fare '
                                onChange={this.handleTicketFare}
                                value={this.state.ticketFare}
                            /><br></br>
                        </div>
                    </div>
                    <label className='labelText' >Departure City</label>
                    <Dropdown
                        placeholder='Select Departure Airport'
                        fluid
                        search
                        selection
                        value={this.state.departureCity}
                        options={this.Airports}
                        onChange={this.handleDepartureCity}
                    />
                    <label className='labelText' >Arrival City</label>
                    <Dropdown
                        placeholder='Select Arrival Airport'
                        fluid
                        search
                        selection
                        value={this.state.arrivalCity}
                        options={this.Airports}
                        onChange={this.handleArrivalCity}
                    />
                    <div className='row '>
                        <div className='col'>
                            <label className='labelText' >Departure Date</label><br></br>
                            <DatePicker
                                className='ui fluid search selection dropdown'
                                dateFormat="dd-MM-yyyy"
                                selected={this.date.unformattedDate1}
                                onChange={this.handleDepartureDate}
                            />
                        </div>
                        <div className='col'>
                            <label className='labelText' >Departure Time</label><br></br>
                            <TimePicker
                                className='ui fluid search selection dropdown'
                                onChange={this.handleDepartureTime}
                                value={this.state.departureTime}
                            />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col'>
                            <label className='labelText' >Arrival Date</label><br></br>
                            <DatePicker
                                className='ui fluid search selection dropdown'
                                dateFormat="dd-MM-yyyy"
                                selected={this.date.unformattedDate2}
                                onChange={this.handleArrivalDate}
                            />
                        </div>
                        <div className='col'>
                            <label className='labelText' >Arrival Time</label><br></br>
                            <TimePicker
                                className='ui fluid search selection dropdown'
                                onChange={this.handleArrivalTime}
                                value={this.state.arrivalTime}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{ marginTop: '30px' }}>
                        <button className='btn btn-success' type='submit' disabled={!this.formValid()}> SUBMIT</button>
                    </div>
                </form>

                <div className='modal'>
                    <Modal size='tiny' open={this.state.modalSuccessOpen} onClose={this.closeModal}>
                        <Modal.Header>DONE !</Modal.Header>
                        <Modal.Content>
                            <p>Flight added successfully.</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button
                                positive
                                icon='checkmark'
                                labelPosition='center'
                                content='OK'
                                onClick={this.pushToAddFlight}
                            />
                        </Modal.Actions>
                    </Modal>
                </div>


                <div className='modal'>
                    <Modal size='tiny' open={this.state.modalFailedOpen} onClose={this.closeModal}>
                        <Modal.Header>FAILED !</Modal.Header>
                        <Modal.Content>
                            <p>Flight data already exists.</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button
                                negative
                                onClick={this.pushToAddFlight}
                            >OK</Button>
                        </Modal.Actions>
                    </Modal>
                </div>




            </Container>

        )
    }
}

export default AddFlights;