import React from 'react';
import './css/Main.css'
import NavHeader from './../components/NavHeader.js'

import penta from './../assets/img/motif-penta.png'
import picto1 from './../assets/img/pickup-icon.svg'
import picto2 from './../assets/img/leagues-icon.svg'
import picto3 from './../assets/img/field-icon.svg'
import picto4 from './../assets/img/training-icon.svg'
import slider1 from './../assets/img/imageCarousel1.jpg'
import slider2 from './../assets/img/stocktempo.jpg'
import slider3 from './../assets/img/stocktempo2.jpg'
import banner from './../assets/img/Desktop-7.jpg'

import Slider from "react-slick";
import { render } from '@testing-library/react';

export default function Main() {
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
      <div className="row">
        <div className="col">
            <div className="parallaxBackground">
              <div className="filterOpaque">
              <NavHeader />
              <img class="pentaLogo" src={penta}/>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-none d-md-flex headerBand">
        <div className="col">
          <a href="#">Pick-up</a>
        </div>
        <div className="col">
          <a href="#">Leagues</a>
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

          <div className="col-md-12 col-lg-6 d-flex p-1 scheduleContainer">
              <h2 className="sectionTitle">Schedules</h2>

              <div className="scheduleCard">
                <div className="schedulePicto">
                  <img className="picto1" src={picto1}/>
                </div>
                <div className="scheduleText scheduleGreen">
                  <span>Pick-up</span>
                </div>
              </div>
              
              <div className="scheduleCard">
                <div className="schedulePicto">
                  <img className="picto2" src={picto2}/>
                </div>
                <div className="scheduleText scheduleRed">
                  <span>Leagues</span>
                </div>
              </div>

              <div className="scheduleCard">
                <div className="schedulePicto">
                  <img className="picto3" src={picto3}/>
                </div>
                <div className="scheduleText scheduleGreen">
                  <span>Field Rentals</span>
                </div>
              </div>

              <div className="scheduleCard">
                <div className="schedulePicto">
                  <img className="picto4" src={picto4}/>
                </div>
                <div className="scheduleText scheduleBlue">
                  <span>Training</span>
                </div>
              </div>
          </div>

          <div className="col-md-12 col-lg-6 p-1">
            <h2 className="sectionTitle">News From Le Five</h2>
            <div>
              <Slider {...settings}>
                <div className="sliderContainer">
                  <span>DEC 01, 2020</span>
                  <div>
                    <img class="sliderPhoto" src={slider1}/>
                  </div>
                  <div className="miniCards">
                    <span>LE FIVE Rancho Cordova</span>
                    <span>AdultTournaments</span>
                  </div>
                  <h3>Lorem ipsum dolor sit amet</h3>
                </div>
                <div className="sliderContainer">
                  <span>FEV 20, 2021</span>
                  <div>
                    <img class="sliderPhoto" src={slider2}/>
                  </div>
                  <div className="miniCards">
                    <span>Leagues</span>
                    <span>World</span>
                    <span>Multiple</span>
                    <span>Elements in a same</span>
                    <span>Div</span>
                  </div>
                  <h3>Lorem ipsum dolor sit amet</h3>
                </div>
                <div className="sliderContainer">
                  <span>MAR 03, 2021</span>
                  <div>
                    <img class="sliderPhoto" src={slider3}/>
                  </div>
                  <div className="miniCards">
                    <span>Lorem</span>
                    <span>Ipsum</span>
                  </div>
                  <h3>Lorem ipsum dolor sit amet</h3>
                </div>
              </Slider>
            </div>
            <div className="pt-5">
              <button type="button" class="btn btn-lg seeMoreButton">See all news</button>
            </div>
          </div>

        </div>
      </div>

      <div className="p-4">

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <img class="bannerImage" src={banner}/>
          </div>
          <div className="col-md-12 col-lg-6">
            <img class="bannerImage" src={banner}/>
          </div>
        </div>
      </div>

    </div>  
    
    );
}