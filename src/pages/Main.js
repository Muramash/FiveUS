import React from 'react'
import $ from 'jquery';

import './css/Main.css'
import { NavHeader } from './../components/NavHeader.js'
import { MainMenu } from './../components/MainMenu.js'
import { Footer } from './../components/Footer.js'

import penta from './../assets/img/motif-penta.png'
import picto1 from './../assets/img/pickup-icon.svg'
import picto2 from './../assets/img/leagues-icon.svg'
import picto3 from './../assets/img/field-icon.svg'
import picto4 from './../assets/img/training-icon.svg'
import slider1 from './../assets/img/imageCarousel1.jpg'
import slider2 from './../assets/img/stocktempo.jpg'
import slider3 from './../assets/img/stocktempo2.jpg'
import banner from './../assets/img/Desktop-7.jpg'
import penta2 from './../assets/img/motif-penta2.png'
import trio1 from './../assets/img/facilities-01-img.jpg'
import trio2 from './../assets/img/facilities-02-img.jpg'
import trio3 from './../assets/img/facilities-03-img.jpg'
import double1 from './../assets/img/istockphoto-961249446-2048x2048.jpg'
import double2 from './../assets/img/Charte_graphique-17.jpg'
import firstImage from './../assets/img/rentals-img.jpg'
import secondImage from './../assets/img/parties-img.jpg'

import Slider from "react-slick";
import { render } from '@testing-library/react';

import { Link } from 'react-router-dom';

class Main extends React.Component {

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
		$(".fixednavContainer").css("position", "fixed")
		this.state.menuOpened = true;
    }
    else if(this.state.menuOpened){
        $(".menuMain").css("display", "none");
        $(".burgerButton").css("background-color", "#D51317");
        $(".crossBack").css("display", "none");
        $(".burgerImage").css("display", "block")
        $("body").css("overflow", "")
        $(".fixednavContainer").css("position", "absolute")
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
			<div className="row">
				<div className="col">
					<div className="parallaxBackground">
						<div className="filterOpaque">
							<NavHeader openMenu={this.openMenu}/>
							<img className="pentaLogo" alt="" src={penta}/>
						</div>
					</div>
				</div>
			</div>
  
        	<div className="row d-none d-md-flex headerBand">
          		<div className="col">
            		<a href="#">Pick-up</a>
          		</div>
          		<div className="col">
            		<Link to="/league">Leagues</Link>
          		</div>
          		<div className="col">
            		<a href="#">Tournaments</a>
          		</div>
          		<div className="col">
            		<a href="#">Trainings and camps</a>
          		</div>
          		<div className="col">
            		<a href="#">Parties &amp; events</a>
          		</div>           
        	</div>
  
        	<div className="container">
          		<div className="row">
  
            		<div className="col-md-12 col-lg-6 d-flex scheduleContainer">

                		<h2 className="sectionTitle">Schedules</h2>  
						
						<div 
						id="firstCard" 
						className="scheduleCard" 
						data-aos="fade-right" 
						data-aos-delay="250"
						data-aos-mirror="true"
						>
							<div className="schedulePicto">
								<img className="picto1" alt="" src={picto1}/>
							</div>
							<div className="scheduleText scheduleGreen">
								<span>Pick-up</span>
							</div>
                		</div>
                
						<div 
						id="secondCard" 
						className="scheduleCard" 
						data-aos="fade-right" 
						data-aos-anchor="#firstCard" 
						data-aos-delay="500"
						>
							<div className="schedulePicto">
								<img className="picto2" alt="" src={picto2}/>
							</div>
							<div className="scheduleText scheduleRed">
								<span>Leagues</span>
							</div>
						</div>
  
						<div 
						id="thirdCard" 
						className="scheduleCard" 
						data-aos="fade-right" 
						data-aos-anchor="#secondCard" 
						data-aos-delay="750"
						>
							<div className="schedulePicto">
								<img className="picto3" alt="" src={picto3}/>
							</div>
							<div className="scheduleText scheduleGreen">
								<span>Field Rentals</span>
							</div>
             		   </div>
  
						<div 
						id="fourthCard" 
						className="scheduleCard" 
						data-aos="fade-right" 
						data-aos-anchor="#thirdCard" 
						data-aos-delay="1000"
						>
							<div className="schedulePicto">
								<img className="picto4" alt="" src={picto4}/>
							</div>
							<div className="scheduleText scheduleBlue">
								<span>Training</span>
							</div>
            		    </div>
            		</div>
  
            		<div className="col-md-12 col-lg-6">
              			<h2 className="sectionTitle">News From Le Five</h2>
              			<div>
                			<Slider {...settings}>
                  				<div className="sliderContainer">
                    				<span>DEC 01, 2020</span>
									<div>
										<img className="sliderPhoto" alt="" src={slider1}/>
									</div>
									<div className="miniCards">
										<span>LE FIVE Rancho Cordova</span>
										<span>AdultTournaments</span>
									</div>
										<h3>Lorem ipsum dolor sit amet</h3>
										<hr/>
                  				</div>

                  				<div className="sliderContainer">
                    				<span>FEV 20, 2021</span>
                    				<div>
                      					<img className="sliderPhoto" alt="" src={slider2}/>
                    				</div>
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

                  				<div className="sliderContainer">
                    				<span>MAR 03, 2021</span>
                    				<div>
                      					<img className="sliderPhoto" alt="" src={slider3}/>
                    				</div>
                    				<div className="miniCards">
										<span>Lorem</span>
										<span>Ipsum</span>
               					    </div>
                    				<h3>Lorem ipsum dolor sit amet</h3>
                    				<hr/>
                  				</div>
                			</Slider>
            			</div>
						<div className="pt-5">
							<button type="button" className="btn btn-lg seeMoreButton">See all news</button>
						</div>
        			</div>
          		</div>
        	</div>
  
        	<div className="p-4">
        	</div>
  
        	<div className="container">
          		<div className="row">
            		<div className="col descriptionHeader">
              			<img className="bannerImage" alt="" src={banner}/>
              			<div className="descriptionBox">
							<h1>What is Le Five?</h1>
							<span>World Class 5v5 Soccer Experience for Youth &amp; Adults, lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. </span>
							<button type="button" className="btn btn-lg seeMoreButton learnMore">Learn more</button>
						</div>
            		</div>
          		</div>

          		<div className="largeSpacer-1">
					  <img className="d-none d-lg-block secondPenta" src={penta2} alt=""/>
          		</div>

          		<div className="row padSmall">
            		<div className="col contentTextTrio">
              			<div className="blocTextTrio">
							<h2 className="pb-4">WORLD CLASS FACILITY</h2>
							<span className="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non.</span>
							<button type="button" className="btn btn-lg seeMoreButton learnMore">See our facilities</button>
						</div>
              			<div className="d-none d-lg-block imageTrioContainer">
							<div data-aos="fade-left"  className="d-none d-lg-block firstBlocTrio">
								<img className="trioImage" src={trio1} alt=""/>
								<div className="trioText scheduleRed">
									<span>5V5 SOCCER FIELDS</span>
								</div>
							</div>
							<div data-aos="fade-left"  className="d-none d-lg-block secondBlocTrio">
								<img className="trioImage" src={trio2} alt=""/>
								<div className="trioText scheduleRed">
									<span>NEW TURF GENERATION</span>
								</div>
							</div>
							<div data-aos="fade-left"  className="d-none d-lg-block thirdBlocTrio">
								<img className="trioImage" src={trio3} alt=""/>
								<div className="trioText scheduleRed">
									<span>SPORTS AND BAR LOUNGE</span>
								</div>
							</div>
              			</div>
            		</div>
          		</div>
        	</div>

			<div className="largeSpacer-2">
				
			</div>

			<div className="container-fluid soccerContainer">
				<div className="row">
					<div className="col-12 col-lg-6 soccerBloc pt-3 pb-5" data-aos="zoom-in">
						<h2>ADULT SOCCER</h2>
						<img className="imgSoccer" src={double1} alt=""/>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
						<button type="button" className="btn btn-lg seeMoreButton learnMore">Learn more</button>
					</div>
					<div className="col-12 col-lg-6 soccerBloc pt-3 pb-5" data-aos="zoom-in">
						<h2>YOUTH SOCCER</h2>
						<img className="imgSoccer" src={double2} alt=""/>
						<span>Play, Enjoy and hone your skills. 5v5 is the best development tool</span>
						<button type="button" className="btn btn-lg seeMoreButton learnMore">Learn more</button>
					</div>
				</div>
			</div>

			<div className="largeSpacer-3">
				
			</div>

			<div className="container pl-4 pr-4">

				<div className="row fade-right" data-aos="fade-right">
					<div className="col-12 col-lg-6 nopadding imageBloc">
						<img className="blocImage" alt="" src={firstImage}/>
					</div>
					<div className="col-12 col-lg-6 textBloc positionRight">
						<h2 className="pb-3">FIELDS RENTALS</h2>
						<span className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non, imperdiet vel nisl.</span>
						<button type="button" className="btn btn-lg seeMoreButton">Learn more</button>
					</div>
				</div>

				<div className="p-4">
				</div>

				<div className="row" data-aos="fade-left">
					<div className="col-12 col-lg-6 nopadding positionImgRight imageBloc">
						<img className="blocImage" alt="" src={secondImage}/>
					</div>
					<div className="col-12 col-lg-6 textBloc positionBlocLeft positionLeft">
						<h2 className="pb-3">PARTIES AND EVENTS</h2>
						<span className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non, imperdiet vel nisl.</span>
						<button type="button" className="btn btn-lg seeMoreButton">Learn more</button>
					</div>
				</div>

			</div>

			<div className="largeSpacer-3">
				
			</div>

			<Footer/>
			
      	</div>  
      
      );
  }

}
export {Main};