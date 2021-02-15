import React from 'react';
import $ from 'jquery';

import { Link } from 'react-router-dom';

class MainMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
        }
      }
    componentDidMount() {
        $(".altList").css("background-color", "#07356D")
    }
    dropdownBehaviour = (targetedDropdown, targetedArrow, targetedWideArrow, targetedTitle) => {
        $(".altList").css("background-color", "#fff")
        for(let i=0; i <= 2;i++){
            $("#dropdownMenu"+i).css("display","none")
            $("#dropdownMenu"+i+"-lg").css("display","none")
            $("#dropdownTitle"+i).removeClass("activeMenu")
            // $("#wideArrow-"+i).css("background-color","#fff")
        }
        $(".arrow").removeClass("up")
        $(".arrow").addClass("down")
        $("#"+targetedArrow).removeClass("down")
        $("#"+targetedArrow).addClass("up")
        $("#"+targetedDropdown).css("display", "block");
        $("#"+targetedDropdown+"-lg").css("display", "block");
        $("#"+targetedDropdown+"-lg").addClass("activeMenu");
        $("#"+targetedTitle).addClass("activeMenu")
        // $("#"+targetedWideArrow).css("background-color","#D51317")
      }
    render() {
        return (
        <div className="menuMain">
            <div className="row">
                <div className="col-lg-6 d-flex mainList">
                    
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link">What's Le Five?</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a id="dropdownTitle1" className="nav-link" onClick={() => this.dropdownBehaviour("dropdownMenu1", "arrow-1","wideArrow-1","dropdownTitle1")}>Adult Soccer 
                            <div class="dropdownLogo">
                                <i id="arrow-1" class="arrow down d-lg-none"></i>
                                <span id="wideArrow-1" class="arrow arrow-bar is-right d-none d-lg-block"></span>
                            </div>
                            </a>
                        
                        <div id="dropdownMenu1" className="d-lg-none dropdownItems">
                            <ul className="nav flex-column subDropdown">
                                <li className="nav-item">
                                    <a className="nav-link">Adult soccer general</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Adult pick-up</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/league" className="nav-link">Adult Leagues</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Adult tournaments</a>
                                </li>
                            </ul>
                        </div>
                        </li>
                        <li className="nav-item">
                            <a id="dropdownTitle2" className="nav-link" onClick={() => this.dropdownBehaviour("dropdownMenu2", "arrow-2","wideArrow-2","dropdownTitle2")}>Youth Soccer 
                            <div class="dropdownLogo">
                                <i id="arrow-2" class="arrow down d-lg-none"></i>
                                <span id="wideArrow-2" class="arrow arrow-bar is-right d-none d-lg-block"></span>
                            </div>
                            </a>

                        <div id="dropdownMenu2" className="d-lg-none dropdownItems">
                            <ul className="nav flex-column subDropdown">
                                <li className="nav-item">
                                    <a className="nav-link">Youth soccer general</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Youth pick-up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Youth Leagues</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Youth tournaments</a>
                                </li>
                            </ul>
                        </div>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Field Rentals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Parties and Events</a>
                        </li>
                        <li>
                            <a className="nav-link">Sports bar</a>
                        </li>
                        <li>
                            <a className="nav-link">News</a>
                        </li>
                        <li>
                            <a className="nav-link">Le Five Facilities</a>
                        </li>
                        <li>
                            <a className="nav-link">FAQ</a>
                        </li>
                        <li>
                            <a className="nav-link">Contact us</a>
                        </li>
                    </ul>

                </div>
                <div className="col-lg-6 altList d-none d-lg-flex ">
                    <div id="dropdownMenu1-lg" className="dropdownItems">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link">Adult soccer general</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Adult pick-up</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/league"><a className="nav-link">Adult Leagues</a></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Adult tournaments</a>
                                </li>
                            </ul>
                        </div>

                        <div id="dropdownMenu2-lg" className="dropdownItems">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link">Youth soccer general</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Youth pick-up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Youth Leagues</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Youth tournaments</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
        );
    }
};

export {MainMenu};