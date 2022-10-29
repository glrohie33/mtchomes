import React from 'react';
import logo from '../assets/images/Group 40.svg'
import '../styles/footer.scss'
import {Col, Row} from "react-bootstrap";
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'
function Footer(props) {
    return (
        <footer>
            <div className={`footer-cover`}>
                <div className={`footer-items`}>
                    <div className={`top-footer`}>
                        <hr/>
                        <div className={`footer-logo`}>
                            <img src={logo} alt=""/>
                        </div>
                        <hr/>
                    </div>

                    <div className={`footer-content-area`}>
                        <div className={`footer-menu`}>
                            <Row className={`desktop-menu`}>
                                <Col md={3} >
                                    <h3 className={`text-white`}>About</h3>
                                    <ul>
                                        <li><a href="/">Shop</a></li>
                                        <li><a href="/">plan my kitchen</a></li>
                                        <li><a href="/">about us</a></li>
                                        <li><a href="/">gallery</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} >
                                    <h3  className={`text-white`}>Service</h3>
                                    <ul>
                                        <li><a href="/">faq</a></li>
                                        <li><a href="/">contact</a></li>
                                        <li><a href="/">how to buy</a></li>
                                        <li><a href="/">downloads</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} >
                                    <h3 className={`text-white`}>Info</h3>
                                    <ul>
                                        <li><a href="/">delivery</a></li>
                                        <li><a href="/">terms</a></li>
                                        <li><a href="/">privacy</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} >
                                    <h3 className={`text-white`}>Follow</h3>
                                    <div className={`footer-icons`}>
                                        <img src={facebook}  alt=""/>
                                        <img src={twitter} alt=""/>
                                        <img src={instagram} alt=""/>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`mobile-menu`}>
                                <div className={'menu'}>
                                    <ul>
                                        <li><a href="/">faq</a></li>
                                        <li><a href="/">Shop</a></li>
                                        <li><a href="/">terms</a></li>
                                        <li><a href="/">gallery</a></li>
                                        <li><a href="/">contact</a></li>
                                        <li><a href="/">privacy</a></li>
                                        <li><a href="/">about us</a></li>
                                        <li><a href="/">delivery</a></li>
                                        <li><a href="/">downloads</a></li>
                                        <li><a href="/">how to buy</a></li>
                                        <li><a href="/">plan my kitchen</a></li>
/
                                    </ul>
                                </div>
                                <div className={`footer-icons`}>
                                    <img src={facebook}  alt=""/>
                                    <img src={twitter} alt=""/>
                                    <img src={instagram} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`bottom-footer`}>
                        <p className={`copyright`}>Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.</p>
                        <hr/>
                    </div>
                </div>

            </div>


        </footer>
    );
}

export default Footer;