import React from 'react';
import $ from 'jquery';

import logo from './../assets/img/lefive-logo-white.svg'
import sign from './../assets/img/sign-icon.svg'
import cal from './../assets/img/cal-icon.svg'
import search from './../assets/img/search-icon.svg'
import burger from './../assets/img/burger-icon.svg'

import { Link } from 'react-router-dom';

class MainMenu extends React.Component {

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
        <div className="menuMain">
            <div className="row d-flex">
                <div className="col-lg-6 d-flex mainList">
                    <ul>
                        <li>What's Le Five</li>
                        <li>Adult Soccer</li>
                        <ul>
                            <li>Adult soccer general</li>
                            <li>Adult pick-up</li>
                            <li>Adult Leagues</li>
                            <li>Adult tournaments</li>
                        </ul>
                        <li>Youth Soccer</li>
                        <li>Field Rentals</li>
                        <li>Parties and Events</li>
                        <li>Sports bar</li>
                        <li>News</li>
                        <li>Le Five Facilities</li>
                        <li>FAQ</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
};

export {MainMenu};