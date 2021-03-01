import React from 'react';
import $ from 'jquery';

import logo from './../assets/img/lefive-logo-white.svg'
import insta from './../assets/img/insta.svg'
import facebook from './../assets/img/facebook.svg'
import youtube from './../assets/img/youtube.svg'
import twitter from './../assets/img/twitter.svg'

import { Link } from 'react-router-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
        }
      }
    componentDidMount() {

    }

    
    render() {


    

        
        return (

            <div className="footerContainer d-flex">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col">
                            <div className="imgFooter">
                                <div className="redFilter">
                                    <span className="textFooter">CONTACT US</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footerContent">
                        <div className="col-lg-4 col-12 ptFooter">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="col-lg-4 col-12 ptFooter">
                            <img className="footerPicto" src={insta} alt=""/>
                            <img className="footerPicto" src={facebook} alt=""/>
                            <img className="footerPicto" src={twitter} alt=""/>
                            <img className="footerPicto" src={youtube} alt=""/>
                        </div>
                        <div className="col-lg-4 col-12 ptFooter">
                            <div className="row">
                                <div className="col-6 footerText">
                                    <ul className="footerBullet">
                                        <li className="footerLink">Contact us</li>
                                        <li className="footerLink">Booking</li>
                                        <li className="footerLink">Rental</li>
                                        <li className="footerLink">FAQ</li>
                                    </ul>
                                </div>
                                <div className="col-6 footerText">
                                    <ul className="footerBullet">
                                        <li className="footerLink">What's LE FIVE ?</li>
                                        <li className="footerLink">LE FIVE facilities</li>
                                        <li className="footerLink">Newsletter</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-12 ptFooter pbFooter">
                            <span className="footerText">© LE FIVE - 2020 <br className="d-lg-none"/>  Privacy policy / Terms and conditions / Sitemap</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export {Footer};