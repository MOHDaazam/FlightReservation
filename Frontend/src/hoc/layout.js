import React, { Component } from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';



class Layout extends Component {




    render() {
        console.log(this.props)

        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />

            </div>
        )
    }

}

export default Layout;