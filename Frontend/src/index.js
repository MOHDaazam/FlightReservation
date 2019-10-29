import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import 'bootstrap/dist/js/bootstrap.bundle.min';




import Routes from './routes'

const App = (props) => {
    // console.log(props)
    return (
        <BrowserRouter >
            <Routes />
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
