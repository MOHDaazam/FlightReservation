
import React, { Component } from 'react';
import Logo from './Assets/img/airplane.svg'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';
import Login from '../Authentication/Login/login';
import Signup from '../Authentication/Signup/signup';




class Header extends Component {
  // console.log(props)


  state = {
    showLogin: false,
    showSignup: false
  }

  openLogin = () => {
    this.setState({
      showSignup: false,
      showLogin: true
    })
  }
  openSignup = () => {
    this.setState({
      showLogin: false,
      showSignup: true
    })
  }
  closeLogin = () => {
    this.setState({ showLogin: false })
  }
  closeSignup = () => {
    this.setState({ showSignup: false })
  }

  render() {
    return (
      <div >
        <AppBar position="static" style={{ backgroundColor: '#2c3e50' }}>
          <div className='row'>
            <div className='col drawer-container'>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" >
                <image src={Logo} width='35px' height='35px'></image>
              </Typography>
            </div>
            <div className='col loginbtn-container'>
              <span className='float-right'>
                <div className='btn-login' color="inherit" onClick={this.openLogin}>Login</div>
              </span>
            </div>
          </div>
        </AppBar>
        <Login showLogin={this.state.showLogin} closeLogin={this.closeLogin} openSignup={this.openSignup} />
        <Signup showSignup={this.state.showSignup} closeSignup={this.closeSignup} openLogin={this.openLogin} />
      </div>
    )
  }
}


export default Header;