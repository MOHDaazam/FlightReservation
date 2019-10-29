import React from 'react';
import SearchFlights from './SearchFlights/searchFlights';
import BannerImage from './BannerImage/bannerImage';
import FlightResults from './FlightResult/flightResult';
import Login from '../Authentication/Login/login';
import SwiperSlider from '../Widgets/SwiperSlider/swiperSlider';



const Home = (props) => {
    console.log(props)




    return (
        <div className='container-fluid'>
            {/* <Login /> */}
            <div>
                <BannerImage />
            </div>
            <div >
                <SearchFlights {...props} />
            </div>
            <div className='container'>
                <SwiperSlider />
            </div>

        </div>

    )
}
export default Home;