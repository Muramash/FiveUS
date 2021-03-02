import React, { Component } from 'react'
import $ from 'jquery';

import './css/Facilities.css'
import { SecondHeader } from './../components/SecondHeader.js'
import { MainMenu } from './../components/MainMenu.js'
import { Footer } from './../components/Footer.js'
import UISelect from './../components/UISelect.js'




class Facilities extends Component {

	constructor(props) {
		super(props);
		this.state = {
			context: props.context,
			menuOpened: false,
			selectedFac: ""
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
		console.log(this.state.facility);

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

		const facilities = new Map();

		facilities.set('sacramento', {
			title:"LE FIVE West Sacramento",
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis.",
			img:"",
			loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
			phone:"916-248-5557",
			calendar:"Business hours"
		})
		facilities.set('other', {
			title:"LE FIVE Other",
			desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			img:"",
			loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
			phone:"916-248-5557",
			calendar:"Business hours"
		})
		facilities.set('foo', {
			title:"LE FIVE Foo",
			desc:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
			img:"",
			loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
			phone:"916-248-5557",
			calendar:"Business hours"
		})
		  
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
        
		<div className="container">
			<div className="row">
				<div className="col">
					<UISelect/>
					
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