import React, { Component } from 'react'
import './searchFlights.css'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { Dropdown } from 'semantic-ui-react'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    DatePicker,
} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import { airportsData } from '../../../airports';



class SearchFlights extends Component {



    state = {
        departureDate1: '',
        departureDate2: '',
        recievedDate1: '',
        recievDate2: '',
        trip: 'One-way',
        fromCityName: '',
        fromCitycode: '',
        toCityName: '',
        toCityCode: '',
        tripTick: false,
        validation: {
            departureDate1: false,
            departureDate2: false,
            from: false,
            to: false
        },
        validationErrorMsg: '',
        showErrorSnackbar: false
    }
    formatDate = (dateString) => {
        let date = new Date(dateString),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    handleStartDateChange = (event) => {
        const formattedDate = this.formatDate(event)
        this.setState({
            departureDate1: formattedDate,
            recievedDate1: event
        })
        this.state.validation.departureDate1 = true
    }
    handleEndDateChange = (event) => {
        const formattedDate = this.formatDate(event)
        this.setState({
            departureDate2: formattedDate,
            recievedDate2: event
        })
        this.state.validation.departureDate2 = true
    }
    handleChangeTripOneway = () => {
        this.setState({
            trip: 'One-way',
            tripTick: false
        })
    }
    handleChangeTripRound = () => {
        this.setState({
            trip: 'Round-trip',
            tripTick: true
        })
    }
    handleFrom = (cityCode, cityName) => {

        this.state.validation.from = true
        this.setState({
            fromCityName: cityName,
            fromCitycode: cityCode
        })

    }
    handleTo = (cityCode, cityName) => {
        this.state.validation.to = true
        this.setState({
            toCityName: cityName,
            toCityCode: cityCode,
        })
    }
    closeErrorSnackbar = () => {
        this.setState({
            showErrorSnackbar: false
        })
    }

    isValid = () => {
        let validation = this.state.validation
        if (validation.from === false) {
            this.setState({
                errorMsg: '',
                validationErrorMsg: 'Please Select Departure City',
                showErrorSnackbar: true
            })
        }
        else if (validation.to === false) {
            this.setState({
                errorMsg: '',
                validationErrorMsg: 'Please Select Arrival City',
                showErrorSnackbar: true
            })
        }
        else if (validation.departureDate1 === false) {
            this.setState({
                errorMsg: '',
                validationErrorMsg: 'Please Select Departure Date',
                showErrorSnackbar: true
            })
        }


    }
    pushToFlightResultPage = () => {
        this.isValid()
        let validation = this.state.validation
        if (validation.from && validation.to && validation.departureDate1)
            this.props.history.push({
                pathname: '/available-flights',
                search: '?query=' + this.state.fromCityName + '&' + this.state.fromCitycode + '&' +
                    this.state.toCityName + '&' + this.state.toCityCode + '&' + this.state.departureDate1 +
                    '&' + this.state.departureDate2 + '&' + this.state.trip

            })

    }
    render() {
        const Airports1 = []
        airportsData.airports.map((data, i) => {
            Airports1.push({
                airportCity: data.city_name,
                airportCityCode: data.IATA_code
            })
        })
        // console.log(this.state.errorMsg)
        return (
            <div className='container shiftUp '>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    key={`${'top'},${'right'}`}
                    open={this.state.showErrorSnackbar}
                    onClose={this.closeErrorSnackbar}
                    autoHideDuration={5000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id errorMsg"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> {this.state.validationErrorMsg}</span>}
                />

                <div className="card shadow-sm" style={{ borderRadius: '20px' }}>
                    <div className="card-body boxForm p-3">
                        {/* ONE WAY ROUND TRIP */}
                        <div className="row no-gutters" >
                            <div className='col d-flex justify-content-center' >
                                <span className={this.state.tripTick === false ? 'trip_button_active' : 'trip_button_default'} onClick={this.handleChangeTripOneway}>
                                    {this.state.tripTick === false ?
                                        <span className="fa fa-check" aria-hidden="true"></span> :
                                        null
                                    }
                                    <span>One Way</span>
                                </span>
                                <span className={this.state.tripTick === true ? 'trip_button_active' : 'trip_button_default'} onClick={this.handleChangeTripRound}>
                                    {this.state.tripTick === true ?
                                        <span className="fa fa-check" aria-hidden="true"></span> :
                                        null
                                    }

                                    <span>Round Trip</span>
                                </span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-sm-3 col-xtra-3 '>
                                {/* <Dropdown
                                    className='depMenu'
                                    placeholder='Select Country'
                                    fluid
                                    search
                                    selection

                                /> */}


                                <div className='dropdown'>
                                    <a data-toggle="dropdown" variant="outlined" className='p-3 buttonFrom btn-default btn-block' style={{ lineHeight: '1.9rem' }}>
                                        <span className="fa_from fa fa-map-marker float-left alignFa" ></span>
                                        <div className='filter-button-title'>{this.state.fromCityName === '' ? 'Departure City' : this.state.fromCityName}</div>
                                    </a>
                                    <div className="dropdown-menu menuFrom">
                                        <div className='menu-header'>
                                            <span className='fa fa-map-marker icon-loc'></span>
                                            <span className='menu-srch'><input type='text' placeholder='Where from ?' /></span>
                                        </div>
                                        {Airports1.map((data, i) => {
                                            return (
                                                <div key={i} className="dropdown-item"
                                                    onClick={() => this.handleFrom(data.airportCityCode, data.airportCity)}
                                                >
                                                    <span className='fa fa-plane icon-plane'></span>
                                                    <span className='arpt-name'>{data.airportCity}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div style={{ zIndex: "1" }}>
                                <div className='d-flex justify-content-center' style={{ marginLeft: '-47px', marginRight: '-47px', marginTop: '17px', zIndex: '1' }}>
                                    <span id="div1" className="left"></span>
                                    <span id="roundedCard" className='d-flex justify-content-center'>
                                        <i className="fa fa-exchange faExhange rotated-image" aria-hidden="true"></i>
                                    </span>
                                    <span id="div1" className="right"></span>
                                </div>
                            </div>
                            <div className='search col-lg-3 col-md-6 col-sm-3 col-xtra-3'>
                                <div className='dropdown'>
                                    <a data-toggle="dropdown" variant="outlined" className='p-3 buttonFrom btn-default btn-block btn-huge' style={{ lineHeight: '1.9rem' }}>
                                        <span className="fa fa-map-marker float-left alignFa" style={{ marginLeft: '15px' }} ></span>
                                        <div className=' filter-button-title'>{this.state.toCityName === '' ? 'Arrival City' : this.state.toCityName}</div>
                                    </a>
                                    <div className="dropdown-menu menuTo">
                                        <div className='menu-header'>
                                            <span className='fa fa-map-marker icon-loc'></span>
                                            <span className='menu-srch'><input type='text' placeholder='Where to ?' /></span>
                                        </div>
                                        {Airports1.map((data, i) => {
                                            return (
                                                <div key={i} className="dropdown-item"
                                                    onClick={() => this.handleTo(data.airportCityCode, data.airportCity)}
                                                >
                                                    <span className='fa fa-plane icon-plane'></span>
                                                    <span className='arpt-name'>{data.airportCity}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='search col-lg-3 col-md-6 col-sm-3 col-xtra-3'>
                                <div className='shadow-sm p-3 buttonFrom'>
                                    <span id="departDate" className="fa fa-calendar float-left alignFa" ></span>
                                    <div className='date-pickerPadding' >
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker
                                                InputProps={{ disableUnderline: true }}
                                                id="date-picker-dialog"
                                                format="dd/MM/yyyy"
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                onChange={this.handleStartDateChange}
                                                value={this.state.recievedDate1}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-3 col-xtra-3'>
                                <div id="returnDate" className='shadow-sm p-3 buttonFrom'>
                                    <span className="fa fa-calendar float-left alignFa" ></span>
                                    {this.state.trip === 'One-way' ?
                                        <div className='text-fade' onClick={this.handleChangeTripRound}>Add return</div> :
                                        <div className='date-pickerPadding '>

                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <DatePicker
                                                    InputProps={{ disableUnderline: true }}
                                                    id="date-picker-dialog"
                                                    format="dd/MM/yyyy"
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    onChange={this.handleEndDateChange}
                                                    value={this.state.recievedDate2}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row shiftButtonUp'>
                    <div className='col d-flex justify-content-center'>
                        <div className='search-button shadow' onClick={this.pushToFlightResultPage}>
                            SEARCH
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default SearchFlights;