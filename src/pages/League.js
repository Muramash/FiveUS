import React, { Component } from 'react'
import $ from 'jquery';
import Slider from "react-slick";

import './css/League.css'
import { SecondHeader } from './../components/SecondHeader.js'
import { MainMenu } from './../components/MainMenu.js'

import league from './../assets/img/leagues-icon.svg'
import firstImage from './../assets/img/adult-img.jpg'
import secondImage from './../assets/img/youth-img.jpg'
import thirdImage from './../assets/img/exemple-video.jpg'

import backSlideImg from './../assets/img/bg-img.jpg'

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

		$(".navContainer").removeClass("fixednavContainer")
		$(".navContainer").addClass("initialnavContainer")
		this.state.menuOpened = true;
    }
    else if(this.state.menuOpened){
        $(".menuMain").css("display", "none");
        $(".burgerButton").css("background-color", "#D51317");
        $(".crossBack").css("display", "none");
        $(".burgerImage").css("display", "block")
        $("body").css("overflow", "")

        $(".navContainer").removeClass("initialnavContainer")
        $(".navContainer").addClass("fixednavContainer")
      this.state.menuOpened = false;
    }
}

render(){
    const settings = {
		dots: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		cssEase: 'linear',
		arrows: false,
    };

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
                		<img className="titleLogo" data-aos="zoom-in" alt="" src={league}/>
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

        	<div className="row fade-right" data-aos="fade-right">
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

        	<div className="row" data-aos="fade-left">
            	<div className="col-12 col-lg-6 nopadding positionImgRight imageBloc">
              		<img className="blocImage" alt="" src={secondImage}/>
            	</div>
            	<div className="col-12 col-lg-6 textBloc positionBlocLeft positionLeft">
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

          	<div className="row" data-aos="fade-right">
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

        <div className="p-5">
        </div>

        <div className="container-fluid">
            <div className="row">
              	<div className="col nopadding">
                	<div className="sliderMainContainer">
                  	<Slider {...settings}>
                    	<div className="sliderContainer">
                      		<span>DEC 01, 2020</span>
                      		<div className="miniCards">
                        		<span>LE FIVE Rancho Cordova</span>
                        		<span>AdultTournaments</span>
                      		</div>
                      		<h3>Lorem ipsum dolor sit amet</h3>
                      		<hr/>
                    	</div>
                    	<div className="sliderContainer">
                      		<span>FEV 20, 2021</span>
                      		<div className="miniCards">
								<span>Leagues</span>
								<span>World</span>
								<span>Multiple</span>
								<span>Elements in a same</span>
								<span>Div</span>
                      		</div>
                      		<h3>Lorem ipsum dolor sit amet</h3>
                      		<hr/>
                    	</div>
                  	</Slider>
                </div>
            </div>
        </div>
    </div>

</div>
      
    );
  }
}
export {League};