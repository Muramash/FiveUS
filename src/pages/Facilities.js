import React, { Component } from 'react'
import $ from 'jquery';

import './css/Facilities.css'
import { SecondHeader } from './../components/SecondHeader.js'
import { MainMenu } from './../components/MainMenu.js'
import { Footer } from './../components/Footer.js'

class Facilities extends Component {

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
    	return (

<div className="container-fluid p-0">
    <MainMenu/>
    <SecondHeader openMenu={this.openMenu}/>
    <div className="p-1 m-3 d-lg-none">
    </div>

        <div className="row">
        	<div className="col">
            	<div className="titleBackgroundFac">
            		<div className="titleOpaque">
              		</div>
            	</div>
        	</div>
    	</div>
        
        <div className="row">
          	<div className="col">
            	<div className="pageTitle pageTitleDarkBlue">
              		<span>Our Facilities</span>
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

export {Facilities};