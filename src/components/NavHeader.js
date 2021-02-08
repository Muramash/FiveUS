import React from 'react';
import $ from 'jquery';

import logo from './../assets/img/lefive-logo-white.svg'
import sign from './../assets/img/sign-icon.svg'
import cal from './../assets/img/cal-icon.svg'
import search from './../assets/img/search-icon.svg'
import burger from './../assets/img/burger-icon.svg'

import { Link } from 'react-router-dom';

export default function NavHeader() {
    $(".menuMain").click(function(){
        console.log("working")      
      })
    return (
  
    <div className="navContainer d-flex">

    <div className="menuMain d-flex">
        <div className="row">
            <div className="col">
                a
            </div>
        </div>
    </div>

            <div className="row">
                <div className="col-md-6 col-lg-4 justify-content-start">
                    <div className="buttonBurgerContent">
                        <div className="burgerButton">
                        </div>
                        <img className="pl-2 burgerImage" src={burger}/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 justify-content-center">
                    <Link to="/"><img className="mainLogo" src={logo}/></Link>
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
                            <img className="pl-2 signSearch" src={search}/>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    );
    

}
