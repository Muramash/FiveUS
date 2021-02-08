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
                let menuOpened = false;

        function openMenu(){
            if(!menuOpened){
                $(".menuMain").css("display", "flex");
                menuOpened = true;
            }
            else if(menuOpened){
                $(".menuMain").css("display", "none");
                menuOpened = false;
            }
        }
        return (
        <div className="menuMain">
            <div className="row">
                <div className="col">
                </div>
            </div>
        </div>
        );
    }
};

export {MainMenu};