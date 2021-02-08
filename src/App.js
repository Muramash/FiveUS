import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React, { Component } from 'react'
import { BrowserRouter,Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { MainMenu } from './components/MainMenu.js'

import { Main } from './pages/Main.js';
import { League } from './pages/League.js';
import { News } from './pages/News.js';

class App extends Component {



  render(){
    return (
    <div className="App">
      <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route 
            exact
            path="/"
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
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

  }
  

export default App;
