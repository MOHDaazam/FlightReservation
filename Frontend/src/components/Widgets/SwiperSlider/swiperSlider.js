import React, { Component } from 'react';
import Slider from 'react-slick';
import DelhiImage from './images/india-gate.jpg';
import JaipurImage from './images/jaipur.jpg';
import MumbaiImage from './images/mumbai.jpg';
import HyderabadImage from './images/hyderabad.jpg';
import GoaImage from './images/goa.jpg';
import VaranasiImage from './images/varanasi.jpg';
import './swiperSlider.css';




class SwiperSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true
        }
        return (
            <div className='swiper-slider-container'>
                <div className='ss-title'>Popular Destinations</div>
                <div className="swiper-slider" >
                    <Slider {...settings}>
                        <div>
                            <img className='ss-city-image'
                                src={DelhiImage}
                                height='200px'
                                width='250px' />
                            <div className='ss-city-name'>Delhi</div>
                            <div className='ss-price-title'>Starting at ₹3000*</div>
                        </div>
                        <div>
                            <img className='ss-city-image'
                                src={JaipurImage}
                                height='200px'
                                width='250px' />
                            <div className='ss-city-name'>Jaipur</div>
                            <div className='ss-price-title'>Starting at ₹3500*</div>
                        </div>
                        <div>
                            <img className='ss-city-image'
                                src={VaranasiImage}
                                height='200px'
                                width='250px' />
                            <div className='ss-city-name'>Varanasi</div>
                            <div className='ss-price-title'>Starting at ₹2500*</div>
                        </div>
                        <div>
                            <img className='ss-city-image'
                                src={MumbaiImage}
                                height='200px'
                                width='250px' />
                            <div className='ss-city-name'>Mumbai</div>
                            <div className='ss-price-title'>Starting at ₹4200*</div>
                        </div>
                        <div>
                            <img className='ss-city-image'
                                src={HyderabadImage}
                                height='200px'
                                width='250px' />
                            <div className='ss-city-name'>Hyderabad</div>
                            <div className='ss-price-title'>Starting at ₹3600*</div>
                        </div>
                        <div>
                            <img className='ss-city-image'
                                src={GoaImage}
                                height='200px'
                                width='250px' />
                            <div className='ss-city-name'>Goa</div>
                            <div className='ss-price-title'>Starting at ₹5200*</div>
                        </div>


                    </Slider>

                </div>
            </div>
        )
    }
}
export default SwiperSlider;
