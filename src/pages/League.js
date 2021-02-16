import React, { Component } from 'react'
import $ from 'jquery';

import './css/League.css'
import { SecondHeader } from './../components/SecondHeader.js'
import { MainMenu } from './../components/MainMenu.js'

import league from './../assets/img/leagues-icon.svg'
import firstImage from './../assets/img/adult-img.jpg'
import secondImage from './../assets/img/youth-img.jpg'
import thirdImage from './../assets/img/exemple-video.jpg'

class League extends Component {

  constructor(props) {
    super(props);
    this.state = {
        context: props.context,
        menuOpened: false,
    }
  }
  componentDidMount() {
    $(".menuMain").css("display", "none");
    $(".burgerButton").css("background-color", "#D51317");
    $(".crossBack").css("display", "none");
    $(".burgerImage").css("display", "block")
    $("body").css("overflow", "")
  }
  openMenu = () => {
    if(!this.state.menuOpened){
      $(".menuMain").css("display", "flex");
      $(".burgerButton").css("background-color", "#fff");
      $(".crossBack").css("display", "block");
      $(".burgerImage").css("display", "none")
      $("body").css("overflow", "hidden")
      $(".fixednavContainer").css("position", "inherit")
      this.state.menuOpened = true;
    }
    else if(this.state.menuOpened){
        $(".menuMain").css("display", "none");
        $(".burgerButton").css("background-color", "#D51317");
        $(".crossBack").css("display", "none");
        $(".burgerImage").css("display", "block")
        $("body").css("overflow", "")
        $(".fixednavContainer").css("position", "fixed")
      this.state.menuOpened = false;
    }
  }
  render(){
    return (
      <div className="container-fluid p-0">
        <MainMenu/>
        <SecondHeader openMenu={this.openMenu}/>
        <div className="p-1 m-3 d-lg-none">
        </div>
        <div className="row">
          <div className="col">
              <div className="titleBackground">
                <div className="titleOpaque">
                <img className="titleLogo" alt="" src={league}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="pageTitle pageTitleRed">
              <span>Leagues</span>
            </div>
          </div>
        </div>
        
        <div className="container pl-4 pr-4">

          <div className="row">
            <div className="col">
              <div className="pageSub pt-5 pb-5">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis.</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-6 nopadding imageBloc">
              <img className="blocImage" alt="" src={firstImage}/>
            </div>
            <div className="col-12 col-lg-6 textBloc positionRight">
              <h2 className="pb-3">LE FIVE ADULT SOCCER LEAGUES</h2>
              <span className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis.</span>
              <ul>
                <li className="pb-3">— Proin arcu leo, tincidunt eget tincidunt non. </li>
                <li className="pb-3">— Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. </li>
                <li className="pb-3">— Proin arcu leo, tincidunt eget tincidunt non.</li>
              </ul>
              <button type="button" className="btn btn-lg seeMoreButton">Button 1</button>
            </div>
          </div>

          <div className="p-4">
          </div>

          <div className="row p-2">
            <div className="col-12 col-lg-6 nopadding positionImgRight imageBloc">
              <img className="blocImage" alt="" src={secondImage}/>
            </div>
            <div className="col-12 col-lg-6 textBloc positionLeft">
              <h2 className="pb-3">LE FIVE YOUTH SOCCER LEAGUES</h2>
              <span className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non.</span>
              <div className="blocButtonContainer">
                <button type="button" className="btn btn-lg seeMoreButton">Button 1</button>
                <button type="button" className="btn btn-lg seeMoreButton">Button 2</button>
              </div>
            </div>
          </div>

          <div className="p-4">
          </div>

          <div className="row">
            <div className="col-12 col-lg-6 nopadding imageBloc">
              <img className="blocImage" alt="" src={thirdImage}/>
            </div>
            <div className="col-12 col-lg-6 textBloc positionRight">
              <h2 className="pb-3">loremipsum SOCCER LEAGUES</h2>
              <span className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non.</span>
              <div className="blocButtonContainer">
                <button type="button" className="btn btn-lg seeMoreButton">Button 1</button>
                <button type="button" className="btn btn-lg seeMoreButton">Button 2</button>
              </div>
            </div>
          </div>          

        </div>

      </div>
      
    );
  }
}
export {League};