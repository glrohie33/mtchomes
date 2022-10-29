import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import banner from "../assets/images/home banner.png";
import 'react-awesome-slider/dist/styles.css';
import '../styles/slider.scoped.scss'

function Slider(props) {
    return (
        <AwesomeSlider className={`home-slider`}>
            <div data-src={banner} className={`slide`}>
                <div className={'inner-content'}>
                    <p className={`text-white`}>Design and order your new kitchen online today</p>
                    <h3 className={`text-white`}>Bespoke & made to measure handmade kitchen design</h3>
                    <button className={`btn btn-gold text-white btn-round`}>
                            Order Now
                    </button>
                </div>
            </div>
            <div data-src={banner} className={`slide`}>
                <div className={'inner-content'}>
                <p className={`text-white`}>Design and order your new kitchen online today</p>
                <h3 className={`text-white`}>Bespoke & made to measure handmade kitchen design</h3>
                <button className={`btn btn-gold text-white btn-round`}>
                    Order Now
                </button>
            </div>
            </div>
            <div data-src={banner} className={`slide`}>
                <div className={'inner-content'}>
                    <p className={`text-white`}>Design and order your new kitchen online today</p>
                    <h3 className={`text-white`}>Bespoke & made to measure handmade kitchen design</h3>
                    <button className={`btn btn-gold text-white btn-round`}>
                        Order Now
                    </button>
                </div>
            </div>
        </AwesomeSlider>
    );
}

export default Slider;