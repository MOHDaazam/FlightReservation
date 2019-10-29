import React, { Component } from 'react';
import './passMatch.css';


class PasswordMatcher extends Component {

    state = {
        matched: false
    }


    passMatchStatus = (status) => {
        this.props.status(status)
        // console.log(status)

    }


    render() {
        //   console.log(this.state.matched)
        //  console.log(this.props)


        return (
            <div >

                {
                    (this.props.password1 && this.props.password2 !== '') &&
                        (this.props.password1 === this.props.password2) ?
                        <div className='matched-msg' >
                            {/* {this.state.matched === false ? this.setState({ matched: true }) : null} */}
                            {this.passMatchStatus(true)}
                            <i className="checkmark icon"></i> Password Matched
                        </div> :
                        (this.props.password1 && this.props.password2 !== '') ?

                            <div className='not-matched-msg'>
                                {/* {this.state.matched === true ? this.setState({ matched: false }) : null} */}
                                {this.passMatchStatus(false)}
                                <i class="fa fa-close"></i> Please confirm your password.
                    </div> :
                            null
                }
            </div>
        )
    }
}
export default PasswordMatcher;