import React, { Component } from 'react';
//@material components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Message } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import PasswordStrength from '../../Widgets/PasswordStrength/passwordStrength';
import PasswordMatcher from '../../Widgets/PasswordMatcher/passwordMatcher';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//@stylesheet
import './signup.css'



class Signup extends Component {

    state = {
        emailId: '',
        emailValid: false,
        validationError: '',
        otpSent: false,
        password1: '',
        password2: '',
        passMatched: false
    }

    useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
            left: 0,
            right: 0,

        },
    }));
    theme = createMuiTheme({
        palette: {
            primary: {
                500: '#1abc9c'
            },
        },
    });

    //Email validation
    validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)

    }

    handleEmail = (event) => {
        const email = event.target.value
        this.setState({ emailId: email })
    }
    handlePass1 = (event) => {
        const pass = event.target.value
        this.setState({ password1: pass })
    }
    handlePass2 = (event) => {
        const pass = event.target.value
        this.setState({ password2: pass })
    }
    //
    handleSubmitEmail = () => {
        const isValid = this.validateEmail(this.state.emailId)
        if (isValid && this.state.emailId !== '')
            this.setState({ validationError: '', otpSent: true })

        else
            this.setState({ validationError: 'Please enter a valid email address.' })

    }
    isNumber(event) {
        var theEvent = event || window.event;
        // Handle paste
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    passMatchStatus = (status) => {
        if (status === true)
            this.state.passMatched = true
        else
            this.state.passMatched = false
    }
    emailChange = () => {
        this.setState({ otpSent: false })
    }
    render() {
        // console.log(this.state.emailId)
        // console.log(this.state.emailValid)
        //   console.log(this.state.passMatched)
        const classes = this.useStyles;
        return (
            <Dialog
                id='dialog-auth'
                open=
                // {true}
                {this.props.showSignup}
                onClose={this.props.closeSignup} className='signup'>
                <div className='row dailog-row'>
                    <div className='col-11'>
                        <span className='d-flex justify-content-center loginpage-title'>Create New Account</span>
                    </div>
                    <div className='col-1'>
                        <IconButton aria-label="close" className='float-right ' onClick={this.props.closeSignup} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                {this.state.otpSent === false ?
                    <DialogContent dividers className='dialog-content-signup'>
                        <ThemeProvider theme={this.theme}>
                            <TextField
                                className={classes.margin}
                                label="Email "
                                variant="outlined"
                                margin="dense"
                                onChange={this.handleEmail}
                                id="mui-theme-provider-outlined-input"
                            />
                        </ThemeProvider>
                        <div className='btn-login-page' onClick={this.handleSubmitEmail} >
                            <span className='btn-login-page-text'>Register</span>
                        </div>
                        {this.state.validationError !== '' ?
                            <Message negative>
                                <Message.Header>{this.state.validationError}</Message.Header>
                            </Message>
                            : null}
                    </DialogContent> :
                    < DialogContent dividers className='dialog-content-signup'>
                        <span className='txt1'>We have sent a OTP to</span>
                        <span className='txt2'>{this.state.emailId} <i className='pencil square icon' onClick={this.emailChange}></i></span>
                        <form>
                            <div className='inputOtp'>
                                <label className='label1'>Please enter the code to verify your email</label>
                                <input type='text' placeholder='Enter OTP' onKeyPress={this.isNumber} maxLength='6' />
                                <span className='resendOtp'>Resend OTP</span>
                            </div>
                            <div className='inputPass1'>
                                <label className='label2'>Choose Password</label>
                                <input type='password' placeholder='Choose Password' id="pwd" onChange={this.handlePass1} /><br></br>
                                <PasswordStrength />
                            </div>
                            <div className='inputPass2'>
                                <label className='label3'>Re-type Password</label>
                                <input type='password' placeholder='Re-type Password' onChange={this.handlePass2} />
                                <PasswordMatcher password1={this.state.password1} password2={this.state.password2} status={this.passMatchStatus} />
                            </div>
                            <button className='btn-login-page' >
                                Submit
                        </button>
                        </form>
                    </DialogContent>
                }
                <DialogActions>
                    <div className='sign-up-link-container'>
                        Already have an account? <span className='login-link' onClick={this.props.openLogin}>Login</span>
                    </div>

                </DialogActions>
            </Dialog >
        )
    }
}
export default Signup; 