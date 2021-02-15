import React from 'react';

import logo from './../assets/img/lefive-logo-white.svg'
import sign from './../assets/img/sign-icon.svg'
import cal from './../assets/img/cal-icon.svg'
import search from './../assets/img/search-icon.svg'
import burger from './../assets/img/burger-icon.svg'

import { Link } from 'react-router-dom';

class NavHeader extends React.Component {

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

            <div className="navContainer d-flex">
        
                    <div className="row headerRow">
                        <div className="col-md-6 col-lg-4 justify-content-start">
                            <div className="buttonBurgerContent">
                                <div className="burgerButton" onClick={() => this.props.openMenu()}>
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
                                    <img className="pl-2 signSearch pSearch" alt="" src={search}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
};

export {NavHeader};