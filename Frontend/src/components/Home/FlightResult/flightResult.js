import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import './flightResult.css'
import $ from 'jquery';
import Axios from 'axios'
import { URL } from '../../Utils/util';
import { PriceComaSeparator } from '../../Widgets/PriceComaSeparator/PriceComaSeparator';
import { dateToMonthFormat } from '../../Widgets/dateToMonthFormat/dateToMonthFormat';
import FlightAnimation from '../../Widgets/FlightAnimation/FlightAnimation';

class FlightResults extends Component {

    state = {
        FlightsOneWay: [],
        FlightsRoundTrip: [],
        queryDepartureCity: '',
        queryArrivalCity: '',
        queryDepartureDate: '',
        queryReturnDate: '',
        departureCity: '',
        arrivalCity: '',
        departureTime: '',
        arrivalTime: '',
        ticketFare: '',
        departureCityReturn: '',
        arrivalCityReturn: '',
        departureTimeReturn: '',
        arrivalTimeReturn: '',
        ticketFareReturn: '',
        trip: '',
        showLoader: true,
        showFlightDetailsFooter: false,








    }
    componentDidMount = () => {
        if (this.props.location !== undefined) {
            var search = this.props.location.search
            var query = search.slice(7).split('&')
            // console.log(query)
            this.setState({
                queryDepartureCity: query[0],
                queryDepartureCityCode: query[1],
                queryArrivalCity: query[2],
                queryArrivalCityCode: query[3],
                queryDepartureDate: query[4],
                queryReturnDate: query[5],
                trip: query[6]
            })

            const searchFlightDataOneWay = {
                departureCityCode: query[1],
                arrivalCityCode: query[3],
                departureDate: query[4],
            }
            const searchFlightDataReturn = {
                departureCityCode: query[3],
                arrivalCityCode: query[1],
                departureDate: query[5],
            }

            // Will search flights in database and response back with data
            Axios.post(URL + '/findFlights', searchFlightDataOneWay)
                .then(response => {
                    //  console.log(response)
                    this.setState({ FlightsOneWay: response.data })
                    // console.log(response.request.status)
                    // this.setState({
                    //     gotData: true,
                    //     flightData: response.data.flight,
                    //     passengerData: response.data.passenger
                    // })

                })
            Axios.post(URL + '/findFlights', searchFlightDataReturn)
                .then(response => {
                    //  console.log(response)
                    this.setState({ FlightsRoundTrip: response.data })
                    // console.log(response.request.status)
                    // this.setState({
                    //     gotData: true,
                    //     flightData: response.data.flight,
                    //     passengerData: response.data.passenger
                    // })

                })

            setTimeout(() => {
                this.setState({ showLoader: false })
            }, 3000);


            // console.log(dateToMonthFormat('2019-11-17'))


        }


    }

    useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        chip: {
            margin: theme.spacing(1),
        },
    }));

    //CSS
    departure_city = {
        marginRight: '60px'
    }
    arrival_city = {
        marginLeft: '60px'
    }
    time_slot = {
        fontSize: '1rem',
        fontWeight: '500',
        color: 'black'
    }
    departure_time = {
        marginRight: '50px'
    }
    arrival_time = {
        marginLeft: '50px'
    }
    nav_border = {
        borderRadius: '10px 10px 0px 0px'
    }
    paper_custom = {
        height: 'auto',
        marginTop: '5px',
        padding: '10px',
        cursor: 'pointer'
    }
    card_custom = {
        borderRadius: '0px 0px 10px 10px',
        marginBottom: '100px'
    }
    fa_icons = {
        transform: 'scale(1.5,1.5)',
        verticalAlign: 'middle',
        lineHeight: '25px',
        margin: '0px 5px 0px 0px'
    }
    rate_chip = {
        backgroundColor: '#1abc9c',
        color: 'white',
        width: 'auto',
        fontSize: '20px'

    }
    paper_active = {
        border: '2px solid #1abc9c',
        height: 'auto',
        marginTop: '5px',
        padding: '10px'
    }
    flight_details_footer = {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#2c3e50',
        color: 'white',
        textAlign: 'center',
        height: 'auto',
        paddingRight: '8px'
    }
    flight_details_col = {
        fontSize: '1rem',
        fontWeight: '500',
        color: 'white',

    }
    flight_details_time = {
        fontSize: '0.9rem'
    }
    flight_details_fa = {
        padding: '4px'
    }
    flight_details_city = {
        padding: '0px 15px 0px 28px',
        fontSize: 'x-small',
        marginTop: '-5px'
    }
    flight_details_rate_single = {
        fontSize: '28px',
        color: '#1abc9c',
        fontFamily: 'monospace'

    }
    book_button = {
        backgroundColor: '#E74C3C',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '15px',
        cursor: 'pointer',
        width: '60%',
        display: 'inline-block',
        height: 'auto',
        lineHeight: '50px',
        borderRadius: '25px',
        marginTop: '6px'
    }


    //CSS

    //ONCLICK FUNCTIONS
    makeCardOneWayActive = (details) => {
        console.log(details)


        //Changing css of card
        $(".single .MuiPaper-root").css("border", "none")
        $("#" + details[0]).css("border", this.paper_active.border);
        $("#" + details[0]).css("height", this.paper_active.height);
        $("#" + details[0]).css("margin-top", this.paper_active.marginTop);
        $("#" + details[0]).css("padding", this.paper_active.padding);

        //Adding values to state
        this.setState({
            departureTime: details[1],
            arrivalTime: details[2],
            departureCity: details[3],
            arrivalCity: details[4],
            ticketFare: details[5],
            showFlightDetailsFooter: true
        })

    }
    makeCardReturnActive = (details) => {
        console.log(details)


        //Changing css of card
        $(".return .MuiPaper-root").css("border", "none")
        $("#" + details[0]).css("border", this.paper_active.border);
        $("#" + details[0]).css("height", this.paper_active.height);
        $("#" + details[0]).css("margin-top", this.paper_active.marginTop);
        $("#" + details[0]).css("padding", this.paper_active.padding);

        //Adding values to state
        this.setState({
            departureTimeReturn: details[1],
            arrivalTimeReturn: details[2],
            departureCityReturn: details[3],
            arrivalCityReturn: details[4],
            ticketFareReturn: details[5],
            showFlightDetailsFooter: true
        })

    }



    //ONCLICK FUNCTIONS

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             showFlightDetailsFooter:false
    //         })
    //     }, 3000);
    // }
    // componentWillUnmount() {
    //     clearInterval(this.setTimeout);
    //   }

    render(props) {
        const classes = this.useStyles
        console.log(this.state.FlightsRoundTrip)


        return (
            <div>
                {
                    this.state.showLoader === true ?
                        <FlightAnimation
                            depCity={this.state.queryDepartureCity}
                            arrCity={this.state.queryArrivalCity}
                            depDate={this.state.queryDepartureDate}
                            returnDate={this.state.queryReturnDate}
                            trip={this.state.trip}

                        />
                        :
                        this.state.FlightsOneWay.length <= 0 ?
                            <FlightAnimation
                                depCity={this.state.queryDepartureCity}
                                arrCity={this.state.queryArrivalCity}
                                depDate={this.state.queryDepartureDate}
                                returnDate={this.state.queryReturnDate}
                                trip={this.state.trip}
                            />
                            :
                            < div style={{ marginTop: '70px' }} >

                                <div className='nav shadow-sm p-3 nav-custom justify-content-center' style={this.nav_border}>
                                    <div className='row'>
                                        {this.state.trip === 'Round-trip' ?
                                            <div className='row'>
                                                <div className='col flight-1-col'>
                                                    <div className='flight1-details-nav'>
                                                        <h4 className='text-center'>
                                                            <span style={this.departure_time}>{this.state.queryArrivalCity.replace('%20', ' ')}</span>
                                                            <span className="fa fa-long-arrow-right fr-fa-right" aria-hidden="true"></span>
                                                            <span style={this.arrival_time}>{this.state.queryDepartureCity.replace('%20', ' ')}</span>
                                                        </h4>
                                                        <h6 className='text-center'>
                                                            {dateToMonthFormat(this.state.queryDepartureDate)} | 1 Adult
                                                    </h6>
                                                    </div>
                                                </div>
                                                <div className='col flight-2-col'>
                                                    <div className='flight2-details-nav'>
                                                        <h4 className='text-center'>
                                                            <span style={this.departure_time}>{this.state.queryDepartureCity.replace('%20', ' ')}</span>
                                                            <span className="fa fa-long-arrow-right fr-fa-right" aria-hidden="true"></span>
                                                            <span style={this.arrival_time}>{this.state.queryArrivalCity.replace('%20', ' ')}</span>
                                                        </h4>
                                                        <h6 className='text-center'>
                                                            {dateToMonthFormat(this.state.queryReturnDate)} | 1 Adult
                                                    </h6>
                                                    </div>
                                                </div>
                                            </div> :
                                            <div className='col flight-1-col'>
                                                <div className='flight1-details-nav'>
                                                    <h4 className='text-center'>
                                                        <span style={this.departure_time}>{this.state.queryArrivalCity.replace('%20', ' ')}</span>
                                                        <span className="fa fa-long-arrow-right fr-fa-right" aria-hidden="true"></span>
                                                        <span style={this.arrival_time}>{this.state.queryDepartureCity.replace('%20', ' ')}</span>
                                                    </h4>
                                                    <h6 className='text-center'>
                                                        {dateToMonthFormat(this.state.queryDepartureDate)} | 1 Adult
                                                    </h6>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                                {this.state.trip === 'Round-trip' ?
                                    // {/* ONE WAY & ROUND TRIP  */ }
                                    < div className='row no-gutters'>
                                        <div className='col '>
                                            <div className='card card-custom1' style={this.card_custom} >

                                                <div className="card-header">
                                                    <button className='btn btn-default btn-primary btn-filter-custom float-right'>Departure</button >
                                                    <button className='btn btn-default btn-primary btn-filter-custom float-right'>Duration</button >
                                                    <button className='btn btn-default btn-primary btn-filter-custom float-right'>Price</button >
                                                </div>
                                                <div className='card-body shadow-sm container-flights1'>
                                                    <div className='row'>
                                                        {this.state.FlightsOneWay.map((flight, i) => {
                                                            return (
                                                                <div className='col-lg-12 col-md-6 col-sm-12 single'
                                                                    onClick={() => this.makeCardOneWayActive(
                                                                        [`paper${i}`, flight.departureTime, flight.arrivalTime, flight.departureCity, flight.arrivalCity, flight.ticketFare]
                                                                    )}>
                                                                    <Paper id={'paper' + i} style={this.paper_custom}>
                                                                        <div className='d-flex justify-content-center' style={this.time_slot}>
                                                                            <span style={this.departure_time}>{flight.departureTime}</span>
                                                                            <span class="fa fa-long-arrow-right" style={this.fa_icons} aria-hidden="true"></span>
                                                                            <span style={this.arrival_time}>{flight.arrivalTime}</span>
                                                                        </div>
                                                                        <div className='d-flex justify-content-center'>
                                                                            <span style={this.departure_city}>{flight.departureCity}</span>
                                                                            <span style={this.arrival_city}>{flight.arrivalCity}</span>
                                                                        </div>
                                                                        <hr />
                                                                        <div className='row d-flex justify-content-center'>
                                                                            <span className="col d-flex justify-content-center">
                                                                                <i className="fa fa-clock-o " style={this.fa_icons}></i>&nbsp;02h 00m
                                                                     </span>
                                                                            <span className="col d-flex justify-content-center">
                                                                                <i className="fa fa-plane" style={this.fa_icons}></i>&nbsp;{flight.operatingAirlines}
                                                                            </span>
                                                                            <span id='chips' className="col d-flex justify-content-center">
                                                                                <Chip style={this.rate_chip} label={"₹ " + PriceComaSeparator(flight.ticketFare)} className={classes.chip} />
                                                                            </span>
                                                                        </div>
                                                                    </Paper>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='card card-custom2' style={this.card_custom} >

                                                <div className="card-header">
                                                    <button className='btn btn-default btn-primary btn-filter-custom float-left'>Departure</button >
                                                    <button className='btn btn-default btn-primary btn-filter-custom float-left'>Duration</button >
                                                    <button className='btn btn-default btn-primary btn-filter-custom float-left'>Price</button >
                                                </div>


                                                <div className='card-body shadow-sm container-flights2'>
                                                    <div className='row'>
                                                        {this.state.FlightsRoundTrip.map((flight, i) => {
                                                            return (
                                                                <div className='col-lg-12 col-md-6 col-sm-12 return'
                                                                    onClick={() => this.makeCardReturnActive(
                                                                        [`paper${i}R`, flight.departureTime, flight.arrivalTime, flight.departureCity, flight.arrivalCity, flight.ticketFare]
                                                                    )}>
                                                                    <Paper id={'paper' + i + 'R'} style={this.paper_custom}>
                                                                        <div className='d-flex justify-content-center' style={this.time_slot}>
                                                                            <span style={this.departure_time}>{flight.departureTime}</span>
                                                                            <span class="fa fa-long-arrow-right" style={this.fa_icons} aria-hidden="true"></span>
                                                                            <span style={this.arrival_time}>{flight.arrivalTime}</span>
                                                                        </div>
                                                                        <div className='d-flex justify-content-center'>
                                                                            <span style={this.departure_city}>{flight.departureCity}</span>
                                                                            <span style={this.arrival_city}>{flight.arrivalCity}</span>
                                                                        </div>
                                                                        <hr />
                                                                        <div className='row d-flex justify-content-center'>
                                                                            <span className="col d-flex justify-content-center">
                                                                                <i className="fa fa-clock-o " style={this.fa_icons}></i>&nbsp;02h 00m
                                                                        </span>
                                                                            <span className="col d-flex justify-content-center">
                                                                                <i className="fa fa-plane" style={this.fa_icons}></i>&nbsp;{flight.operatingAirlines}
                                                                            </span>
                                                                            <span id='chips' className="col d-flex justify-content-center">
                                                                                <Chip style={this.rate_chip} label={"₹ " + PriceComaSeparator(flight.ticketFare)} className={classes.chip} />
                                                                            </span>
                                                                        </div>
                                                                    </Paper>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    // {/* ONE WAY TRIP */}
                                    <div className='card' style={this.card_custom} >
                                        <div className="card-header">
                                            <button className='btn btn-default btn-primary btn-filter-custom float-right'>Departure</button >
                                            <button className='btn btn-default btn-primary btn-filter-custom float-right'>Duration</button >
                                            <button className='btn btn-default btn-primary btn-filter-custom float-right'>Price</button >
                                        </div>
                                        <div className='card-body shadow-sm'>
                                            <div className='row'>
                                                {this.state.FlightsOneWay.map((flight, i) => {
                                                    return (
                                                        <div className='col-lg-4 col-md-6 col-sm-12 single'
                                                            onClick={() => this.makeCardOneWayActive(
                                                                [`paper${i}`, flight.departureTime, flight.arrivalTime, flight.departureCity, flight.arrivalCity, flight.ticketFare]
                                                            )}>
                                                            <Paper id={'paper' + i} style={this.paper_custom}>
                                                                <div className='d-flex justify-content-center' style={this.time_slot}>
                                                                    <span style={this.departure_time}>{flight.departureTime}</span>
                                                                    <span class="fa fa-long-arrow-right" style={this.fa_icons} aria-hidden="true"></span>
                                                                    <span style={this.arrival_time}>{flight.arrivalTime}</span>
                                                                </div>
                                                                <div className='d-flex justify-content-center'>
                                                                    <span style={this.departure_city}>{flight.departureCity}</span>
                                                                    <span style={this.arrival_city}>{flight.arrivalCity}</span>
                                                                </div>
                                                                <hr />
                                                                <div className='row d-flex justify-content-center'>
                                                                    <span className="col d-flex justify-content-center">
                                                                        <i className="fa fa-clock-o " style={this.fa_icons}></i>&nbsp;02h 00m
                                                            </span>
                                                                    <span className="col d-flex justify-content-center">
                                                                        <i className="fa fa-plane" style={this.fa_icons}></i>&nbsp;{flight.operatingAirlines}
                                                                    </span>
                                                                    <span id='chips' className="col d-flex justify-content-center">
                                                                        <Chip style={this.rate_chip} label={"₹ " + PriceComaSeparator(flight.ticketFare)} className={classes.chip} />
                                                                    </span>
                                                                </div>
                                                            </Paper>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                }

                                {this.state.showFlightDetailsFooter === true ?

                                    <div style={this.flight_details_footer} >
                                        {this.state.trip !== 'Round-trip' || this.state.ticketFare === '' || this.state.ticketFareReturn === '' ?
                                            //This section is for single trip
                                            <div className='row' style={{ marginTop: '15px', marginBottom: '5px' }}>
                                                <div className='col' >
                                                    <div className='flex-row justify-content-center' style={this.flight_details_col}>
                                                        <div className='flex-column'>
                                                            <i className="fa fa-clock-o" style={this.fa_icons} style={this.flight_details_fa} ></i>
                                                            <span style={this.flight_details_time}>{this.state.departureTime}{this.state.departureTimeReturn}</span>
                                                            <span className="fa fa-long-arrow-right" style={this.fa_icons} style={this.flight_details_fa} aria-hidden="true"></span>
                                                            <span style={this.flight_details_time}>{this.state.arrivalTime}{this.state.arrivalTimeReturn}</span>
                                                        </div>
                                                        <div className='flex-column' style={{ marginTop: '-10px' }}>
                                                            <span style={this.flight_details_city}>{this.state.departureCity}{this.state.departureCityReturn}</span>
                                                            <span style={this.flight_details_city}>{this.state.arrivalCity}{this.state.arrivalCityReturn}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col' >
                                                    <div className='flex-row justify-content-center' style={this.flight_details_col}>
                                                        <span style={this.flight_details_rate_single}> <span className='total_single'>Total : </span>₹ {this.state.ticketFare}{this.state.ticketFareReturn}</span>
                                                    </div>
                                                </div>
                                                <div className='col' >
                                                    <a href='#' style={this.book_button} className='book-button-width book_button_width_single'>
                                                        <i className="fa fa-paper-plane " style={{ fontSize: '25px', marginRight: '10px' }} aria-hidden="true"></i>
                                                        <span className='book-button-title' >BOOK</span>
                                                    </a>
                                                </div>
                                            </div>
                                            :
                                            // This section is for return trip 
                                            <div className='row' style={{ marginTop: '10px', marginBottom: '10px' }}>
                                                <div className='col' >
                                                    <div className='flex-row justify-content-center' style={this.flight_details_col}>
                                                        <div className='flex-column'>
                                                            <i className="fa fa-clock-o" style={this.fa_icons} style={this.flight_details_fa} ></i>
                                                            <span style={this.flight_details_time}>{this.state.departureTime}</span>
                                                            <span className="fa fa-long-arrow-right" style={this.fa_icons} style={this.flight_details_fa} aria-hidden="true"></span>
                                                            <span style={this.flight_details_time}>{this.state.arrivalTime}</span>
                                                        </div>
                                                        <div className='flex-column' style={{ marginTop: '-10px' }}>
                                                            <span style={this.flight_details_city}>{this.state.departureCity}</span>
                                                            <span style={this.flight_details_city}>{this.state.arrivalCity}</span>
                                                        </div>
                                                        <div className='flex-column' style={{ color: '#1abc9c' }}>
                                                            <span style={this.flight_details_time}>₹ {this.state.ticketFare}</span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='col' >
                                                    <div className='flex-row justify-content-center' style={this.flight_details_col}>
                                                        <div className='flex-column'>
                                                            <i className="fa fa-clock-o" style={this.fa_icons} style={this.flight_details_fa} ></i>
                                                            <span style={this.flight_details_time}>{this.state.departureTimeReturn}</span>
                                                            <span className="fa fa-long-arrow-right" style={this.fa_icons} style={this.flight_details_fa} aria-hidden="true"></span>
                                                            <span style={this.flight_details_time}>{this.state.arrivalTimeReturn}</span>
                                                        </div>
                                                        <div className='flex-column' style={{ marginTop: '-10px' }}>
                                                            <span style={this.flight_details_city}>{this.state.departureCityReturn}</span>
                                                            <span style={this.flight_details_city}>{this.state.arrivalCityReturn}</span>
                                                        </div>
                                                        <div className='flex-column' style={{ color: '#1abc9c' }}>
                                                            <span style={this.flight_details_time}>₹ {this.state.ticketFareReturn}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col' >
                                                    <a href='#' style={this.book_button} className='book-button-width'>
                                                        <i className="fa fa-paper-plane " style={{ fontSize: '25px', marginRight: '10px' }} aria-hidden="true"></i>
                                                        <span className='book-button-title ' >BOOK</span>
                                                    </a>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    :
                                    null
                                }
                            </div>
                }
            </div>
        )
    }
}
export default FlightResults;