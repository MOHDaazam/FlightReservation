import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/layout'

import CheckIn from './components/Check-in/check-in';
import ReservationDetails from './components/ReservationDetails/reservationDetails'
import AddFlights from './components/Admin/AddFlights/addFlights';
import FlightResults from './components/Home/FlightResult/flightResult';
import Preloader from './components/Widgets/Preloader/preloader';
import FlightAnimation from './components/Widgets/FlightAnimation/FlightAnimation';
import Login from './components/Authentication/Login/login';
import Signup from './components/Authentication/Signup/signup';
import Email from './components/email';
import FlightSinglePage from './components/Home/FlightSinglePage/flightSinglePage';



class Routes extends Component {
    state = {

    }

    render() {
        //  console.log(this.props)

        return (
            <Layout >
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/start-check-in" exact component={CheckIn} />
                    <Route path="/reservationDetails" exact component={ReservationDetails} />
                    <Route path="/add-flight" exact component={AddFlights} />
                    <Route path="/available-flights" exact component={FlightResults} />
                    <Route path="/preloader" exact component={Preloader} />
                    <Route path="/animation" exact component={FlightAnimation} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/email" exact component={Email} />
                    <Route path="/single-page" exact component={FlightSinglePage} />


                </Switch>
            </Layout>

        )
    }
}

export default Routes;