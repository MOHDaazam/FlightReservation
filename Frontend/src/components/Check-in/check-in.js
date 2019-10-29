import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import disableBrowserBackButton from 'disable-browser-back-navigation';
import checkinIcon from './Assets/img/check-in.png'



class CheckIn extends Component {


    state = {
        reservationId: '',
    }

   



    useStyles = makeStyles(theme => ({
        '@global': {
            body: {
                backgroundColor: theme.palette.common.white,
            },
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
           
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
  
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    handleChange = (event) => {

        this.setState({
            reservationId: event.target.value,
        });
        // console.log('---------->' + this.state.reservationId)
    };



    pushToReservationDetails = () => {
        this.props.history.push('/reservationDetails?' + this.state.reservationId)
    }

    componentDidMount(){
        disableBrowserBackButton();
    }
   


    render() {
        const classes = this.useStyles
    // console.log(this.props.window)

        return (
            <Container component="main" maxWidth="xs" style={{ marginTop: '200px', marginBottom: '400px' }}>
                <CssBaseline />
                <div className={classes.paper}>
                    
                   <div className='text-center'>
                       <img src = {checkinIcon} />
                   </div>
                
                    <div className ='text-center'>
                    <Typography component="h1" variant="h5">
                        START CHECKIN
                    </Typography>
                    </div>
                    <form className={classes.form} noValidate >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="reservationId"
                            label="Reservation ID"
                           
                            value={this.state.value}
                            onChange={this.handleChange}
                            autoFocus
                        />
                        <Button
                            style={{
                                backgroundColor: "#1abc9c",
                                fontSize: "18px",
                                color: 'white'
                            }}
                            onClick={this.pushToReservationDetails}
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            START CHECKIN
                </Button>

                    </form>
                </div>

            </Container>
        )
    }

}

export default CheckIn;