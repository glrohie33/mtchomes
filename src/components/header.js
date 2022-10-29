import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import '../styles/header.scss';
import logo from '../assets/images/Group 40.svg'
import {Col, Row} from "react-bootstrap";
import {faBars, faCartShopping, faClose} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
    const [mobileNav,setMobileNavStatus] = useState("");

    return (
        <header>
            <div className={`header-container`}>
                <Row className={`desktop-header`}>
                    <Col md={2} className={'no-padding top-icons'}>
                        <FontAwesomeIcon icon={faFacebookF} className={'icon'} />
                        <FontAwesomeIcon icon={faInstagram} className={'icon'}  />
                        <FontAwesomeIcon icon={faTwitter} className={'icon'} />
                    </Col>
                    <Col md={8} className={'no-padding'}>
                        <nav className={`nav`}>
                            <ul className={`menu menu-left`}>
                                <li><a href="/">shop</a></li>
                                <li><a href="/">Plan my kitchen</a></li>
                            </ul>
                            <div className={`logo-cover`}>
                                <img src={logo} alt="logo"/>
                            </div>
                            <ul className={`menu menu-right`}>
                                <li><a href="/">about us</a></li>
                                <li><a href="/">Gallery</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={2} className={'no-padding cart-area'}>
                        <button className={`btn btn-outline btn-round btn-round`}>
                            My Order
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </button>
                    </Col>
                </Row>
                <div className={`mobile-header flex`}>
                    <div className={`mobile-menu`}>
                        <FontAwesomeIcon icon={faBars} className={`mobile-menu-button icon`} size={'xl'} onClick={()=>setMobileNavStatus('open')}/>
                    </div>
                    <div className={`logo-cover mobile-logo`}>
                        <img src={logo} alt="logo"/>
                    </div>

                    <div className={`mobile-nav ${mobileNav}`}>

                        <div className={`mobile-menu-cover`} >
                            <div className={`logo-cover mobile-logo`}>
                                <img src={logo} alt="logo"/>
                            </div>
                            <ul className={`menu`} onClick={()=>setMobileNavStatus('')}>
                                <li><a href="/">shop</a></li>
                                <li><a href="/">Plan my kitchen</a></li>
                                <li><a href="/">about us</a></li>
                                <li><a href="/">Gallery</a></li>
                            </ul>
                            <div className={`icons`} onClick={()=>setMobileNavStatus('')}>
                                <FontAwesomeIcon icon={faFacebookF} className={'icon'} size={'lg'}/>
                                <FontAwesomeIcon icon={faInstagram} className={'icon'}  size={'lg'}/>
                                <FontAwesomeIcon icon={faTwitter} className={'icon'} size={'lg'}/>
                            </div>
                            <FontAwesomeIcon icon={faClose} className={`close-nav icon`} size={'lg'} onClick={()=>setMobileNavStatus('')} />
                        </div>



                    </div>
                    <div>
                            <FontAwesomeIcon icon={faCartShopping} className={`icon`} size={'xl'}/>
                    </div>




                </div>
            </div>
        </header>
    );
}

export default Header;