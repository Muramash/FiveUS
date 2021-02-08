import React from 'react';

import logo from './../assets/img/lefive-logo-white.svg'
import sign from './../assets/img/sign-icon.svg'
import cal from './../assets/img/cal-icon.svg'

export default function NavHeader() {
  return (
  
    <div className="navContainer d-flex">
            <div className="row">
                <div className="col-md-6 col-lg-4 justify-content-start">
                    <span>Hamburger Menu</span>
                </div>
                <div className="col-md-6 col-lg-4 justify-content-center">
                    <img className="mainLogo" src={logo}/>
                </div>
                <div className="col-lg-4 d-none d-lg-flex justify-content-end">
                    <div className="signinButton">
                        <div className="buttonContent">
                            <span className="buttonText">Sign in</span>
                            <img className="pl-2 signImage" src={sign}/>
                        </div>
                    </div>
                    <div className="bookButton">
                        <div className="buttonContent">
                            <span className="buttonText">Book now</span>
                            <img className="pl-2" src={cal}/>
                        </div>
                    </div>
                    <div className="searchButton">
                        <div className="buttonContent">
                            <span className="buttonText">Sign in</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    );
}