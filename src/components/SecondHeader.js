import React from 'react';
import $ from 'jquery';

import logo from './../assets/img/logo-lefive.svg'
import sign from './../assets/img/sign-icon.svg'
import cal from './../assets/img/cal-icon.svg'
import search from './../assets/img/search-icon.svg'
import burger from './../assets/img/burger-icon.svg'

import { Link } from 'react-router-dom';

class SecondHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
        }
      }
    componentDidMount() {
    }
    burgerAnimOnHover = (angle) => {
        let burgerImage = $(".burgerImage");

            if(angle === 90){
                burgerImage.css("margin-left", "1.5em");
                burgerImage.css("margin-top", "1.2em");
                $({deg: 0}).animate({deg: angle}, {
                    duration: 500,
                    step: function(now){
                        burgerImage.css({
                            transform: 'rotate('+ now +'deg)'
                        })
                    }
                })
            }
            else{
                burgerImage.css("margin-left", "1.2em");
                burgerImage.css("margin-top", "1.5em");
                $({deg: 90}).animate({deg: angle}, {
                    duration: 500,
                    step: function(now){
                        burgerImage.css({
                            transform: 'rotate('+ now +'deg)'
                        })
                    }
                })
            }
    }

    render() {
        
        return (

            <div className="navContainer fixednavContainer d-flex">
        
                    <div className="row headerRowAlt">
                        <div className="col-md-6 col-lg-4 justify-content-start">
                            <div className="buttonBurgerContent">
                                <div className="burgerButton" onMouseEnter={() => this.burgerAnimOnHover(90) } onMouseLeave={() => this.burgerAnimOnHover(0) } onClick={() => this.props.openMenu()}>
                                </div>
                                <img className="pl-2 burgerImage" alt="" src={burger} onClick={() => this.props.openMenu()}/>
                                <div className="crossBack" onClick={() => this.props.openMenu()}>
                                    <div className="crossOne">
                                        <div className="crossTwo"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 justify-content-center">
                            <Link to="/"><img className="mainLogo" alt="" src={logo}/></Link>
                        </div>
                        <div className="col-lg-4 d-none d-lg-flex justify-content-end">
                            <div className="signinButton">
                                <div className="buttonContent">
                                    <span className="buttonText">Sign in</span>
                                    <img className="pl-2 signImage" alt="" src={sign}/>
                                </div>
                            </div>
                            <div className="bookButton">
                                <div className="buttonContent">
                                    <span className="buttonText">Book now</span>
                                    <img className="pl-2" alt="" src={cal}/>
                                </div>
                            </div>
                            <div className="searchButton">
                                <div className="buttonContent">
                                    <img className="pl-2 signSearch" alt="" src={search}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        );
    }
};

export {SecondHeader};