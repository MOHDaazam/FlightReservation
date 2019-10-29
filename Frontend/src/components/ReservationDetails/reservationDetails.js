import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


import Axios from 'axios';
import NoDataFound from '../ErrorPages/no-data';


class ReservationDetails extends Component {



    state = {
        flightData: [],
        passengerData: [],
        gotData: false,
        dateOfDeparture: '',
        bags: '',
        dataUpdated : false

    }

    useStyles = makeStyles(theme => ({
        list: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        listItemText: {

        },
        card: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }

    }));


    formatDate(input) {
        var datePart = input.match(/\d+/g),
            year = datePart[0].substring(2), // get only two digits
            month = datePart[1], day = datePart[2];

        return day + '/' + month + '/' + year;
    }

    handleChange = event => {
        this.setState({
            bags: event.target.value
        })


    }

    handleSubmit = event => {
        event.preventDefault();

        const updatedData = {
            id: this.props.location.search.substr(1),
            checkedIn: true,
            numberOfBags: this.state.bags
        }
        // console.log(updatedData)
        Axios.post('http://localhost:9091/flightReservation/reservations', updatedData)
            .then(response => {
                this.setState({
                    dataUpdated : true
                })
            })
    }



    componentDidMount = () => {
        Axios.get('http://localhost:9091/flightReservation/reservations/' + this.props.location.search.substr(1))
            .then(response => {
                console.log(response.data.passenger)
                this.setState({
                    gotData: true,
                    flightData: response.data.flight,
                    passengerData: response.data.passenger
                })


                let dateDeparture = response.data.flight.dateOfDeparture.substr(0, 10)

                const formatDate = (input) => {
                    var datePart = input.match(/\d+/g),
                        year = datePart[0].substring(2), // get only two digits
                        month = datePart[1], day = datePart[2];

                    return day + '/' + month + '/' + year;
                }
                const formattedDate = this.formatDate(dateDeparture)

                this.setState({
                    dateOfDeparture: formattedDate
                })


            })



    }

    pushToCheckin = () =>{
        this.props.history.push('/start-check-in')
    }
  
  


    render(props) {
        //console.log(this.props)
        //console.log(JSON.stringify(this.state.flightData))



        const classes = this.useStyles;





        return (
            !this.state.gotData?
            <NoDataFound/>
            :
            <React.Fragment>
                <CssBaseline />
                <Container fixed style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Table className={classes.table} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>FLIGHT DETAILS</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Airlines
                                            </TableCell>
                                        <TableCell align='center'>{this.state.flightData.operatingAirlines}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Flight Number
                                            </TableCell>
                                        <TableCell align='center'>{this.state.flightData.flightNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Departure City
                                            </TableCell>
                                        <TableCell align='center'>{this.state.flightData.departureCity}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Arrival City
                                            </TableCell>
                                        <TableCell align='center'>{this.state.flightData.arrivalCity}</TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Date of departure
                                            </TableCell>
                                        <TableCell align='center'>{this.state.dateOfDeparture}</TableCell>
                                    </TableRow>



                                </TableBody>
                            </Table>
                        </Paper>
                    </div>

                </Container>
                <Container fixed style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Table className={classes.table} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>PASSENGER DETAILS</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            First Name
                                            </TableCell>
                                        <TableCell align='center'>{this.state.passengerData.firstName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Last Name
                                            </TableCell>
                                        <TableCell align='center'>{this.state.passengerData.lastName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Email
                                            </TableCell>
                                        <TableCell align='center'>{this.state.passengerData.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Phone Number
                                            </TableCell>
                                        <TableCell align='center'>{this.state.passengerData.phone}</TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Date of departure
                                            </TableCell>
                                        <TableCell align='center'>{this.state.dateOfDeparture}</TableCell>
                                    </TableRow>


                                </TableBody>
                            </Table>
                        </Paper>
                    </div>

                </Container>
                <Container fixed style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Table className={classes.table} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ADD BAGS</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Number of Bags
                                            </TableCell>
                                        <TableCell align='center'>
                                            <TextField
                                                id="outlined-dense"
                                                label="Bags"
                                                className={clsx(classes.textField, classes.dense)}
                                                margin="dense"
                                                variant="outlined"
                                                onChange={this.handleChange}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>

                </Container>

                <Container>
                    <div className='text-center'>
                        <Button
                            style={{

                                backgroundColor: "#1abc9c",
                                marginTop: '10px',
                                marginBottom: '20px',
                                padding: "10px 16px",
                                borderRadius: 35,
                                width: '30%',
                                fontSize: "18px",
                                color: 'white'
                            }}
                            onClick={this.handleSubmit}
                            fullWidth
                            variant="contained"
                            className='jumbotron'
                        >
                            SUBMIT
                            </Button>
                    </div>
                </Container>
        

                <Dialog
                    open={this.state.dataUpdated}
                   
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           Checkin Completed Successfully
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.pushToCheckin}  color="primary">
                            OK
                        </Button>
                      
                    </DialogActions>
                </Dialog>
            </React.Fragment>


        )
    }
}
export default ReservationDetails;