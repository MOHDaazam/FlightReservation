import React, { Component } from 'react';
//@material components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//@stylesheet
import './login.css'


class Login extends Component {
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
    render() {
        const classes = this.useStyles;

        return (
            <Dialog aria-labelledby="customized-dialog-title" open={this.props.showLogin} onClose={this.props.closeLogin} id='dialog-auth'>
                <div className='row dailog-row'>
                    <div className='col-11'>
                        <span className=' d-flex justify-content-center loginpage-title'>Login</span>
                    </div>
                    <div className='col-1'>
                        <IconButton aria-label="close" className='float-right ' onClick={this.props.closeLogin} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                <DialogContent dividers className='dialog-content-login'>
                    <ThemeProvider theme={this.theme}>
                        <TextField
                            className={classes.margin}
                            label="Email or Phone Number"
                            variant="outlined"
                            margin="dense"
                            id="mui-theme-provider-outlined-input"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="dense"
                            variant="outlined"
                        />
                    </ThemeProvider>
                    <div className='btn-login-page '>
                        <span className='btn-login-page-text'>Login</span>
                    </div>
                    <hr className='divider-login'></hr>
                    <span className='or-separator'>OR</span>
                    <div className='btn-login-facebook '>
                        <span className='btn-login-page-text'>
                            <i className="fa fa-facebook fa-fb-custom"></i>
                            Continue with Facebook</span>
                    </div>
                    <div className='btn-login-google'>
                        <span className='btn-login-page-text'>
                            <svg class="svg-google" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><g fill="none" fill-rule="evenodd">
                                <path fill="#4285F4" d="M22.984 12.273c0-.851-.075-1.67-.213-2.455H11.726v4.642h6.311a5.53 5.53 0 0 1-2.34 3.622v3.01h3.79c2.218-2.088 3.497-5.165 3.497-8.82z">
                                </path>
                                <path fill="#34A853" d="M11.726 24c3.167 0 5.821-1.075 7.761-2.907l-3.79-3.011c-1.05.72-2.393 1.145-3.97 1.145-3.055 0-5.64-2.11-6.562-4.947H1.247v3.11C3.177 21.31 7.143 24 11.727 24z">
                                </path>
                                <path fill="#FBBC05" d="M5.165 14.28A7.366 7.366 0 0 1 4.797 12c0-.79.133-1.56.368-2.28V6.61H1.247A12.224 12.224 0 0 0 0 12c0 1.936.453 3.77 1.247 5.39l3.918-3.11z"></path>
                                <path fill="#EA4335" d="M11.726 4.773c1.722 0 3.268.605 4.483 1.794l3.364-3.442C17.542 1.19 14.887 0 11.726 0 7.143 0 3.176 2.69 1.247 6.61l3.918 3.11c.922-2.836 3.507-4.947 6.561-4.947z">
                                </path>
                            </g>
                            </svg>
                            Continue with Google</span>
                    </div>

                </DialogContent>
                <DialogActions>
                    <div className='sign-up-link-container'>
                        New User? <span className='sign-up-link' onClick={this.props.openSignup}>Sign Up</span>
                    </div>

                </DialogActions>
            </Dialog>
        )
    }
}
export default Login; 