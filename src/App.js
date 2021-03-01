import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import 'animate.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { Main } from './pages/Main.js';
import { League } from './pages/League.js';
import { Facilities } from './pages/Facilities.js';

class App extends Component {



  render(){
    AOS.init({
      	delay: 500,
      	easing: 'ease',
      	once: true,
      	duration: 1000
    });

    return (
		<div className="App">
      		<div className="wrapper">
				<BrowserRouter>
					<Switch>
						<Route 
						exact path="/"
						render={() =>{
						return (
							<Redirect to="/main"/>
						)
						}}>
						</Route>
						<Route path="/main">
							<Main />
						</Route>
						<Route path="/league">
							<League />
						</Route>
						<Route path="/facilities">
							<Facilities />
						</Route>
					</Switch>
				</BrowserRouter>
      		</div>
    	</div>
  );
}

  }
  

export default App;
