import React, { Component } from 'react'
import $ from 'jquery';

import './css/League.css'
import { SecondHeader } from './../components/SecondHeader.js'
import { MainMenu } from './../components/MainMenu.js'

import league from './../assets/img/leagues-icon.svg'

class League extends Component {

  constructor(props) {
    super(props);
    this.state = {
        context: props.context,
        menuOpened: false,
    }
  }
  componentDidMount() {
  }
  openMenu = () => {
    if(!this.state.menuOpened){
      $(".menuMain").css("display", "flex");
      $(".burgerButton").css("background-color", "#fff");
      $(".crossBack").css("display", "block");
      $(".burgerImage").css("display", "none")
      $("body").css("overflow", "hidden")
      this.state.menuOpened = true;
    }
    else if(this.state.menuOpened){
        $(".menuMain").css("display", "none");
        $(".burgerButton").css("background-color", "#D51317");
        $(".crossBack").css("display", "none");
        $(".burgerImage").css("display", "block")
        $("body").css("overflow", "")
      this.state.menuOpened = false;
    }
  }
  render(){
    return (
      <div className="container-fluid p-0">
        <MainMenu/>
        <SecondHeader openMenu={this.openMenu}/>
        <div className="row">
          <div className="col">
              <div className="titleBackground">
                <div className="filterOpaque">
                <img className="pentaLogo" alt="" src={league}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
export {League};