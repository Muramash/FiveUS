import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';

import './css/Facilities.css'
import { SecondHeader } from './../components/SecondHeader.js'
import { MainMenu } from './../components/MainMenu.js'
import { Footer } from './../components/Footer.js'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import map from './../assets/img/map.jpg'
import sacramentoimg from './../assets/img/sacramento_min.jpg'

import calendicon from './../assets/img/cal2-icon.svg'
import phoneicon from './../assets/img/phone-icon.svg'
import mailicon from './../assets/img/mail-icon.svg'
import pinicon from './../assets/img/pin-icon.svg'

import facebook from './../assets/img/facebook_fac.svg'
import instagram from './../assets/img/instagram_fac.svg'


class Facilities extends Component {

	constructor(props) {
		super(props);
		this.state = {
			context: props.context,
			menuOpened: false,
			selectedFac: '',

			context: props.context,
			menuOpened: false,
			openState: "",
			button: {
				display: 'block',
				marginTop: '2em',
				},
			formControl: {
				margin: '10px',
				minWidth: 120,
				},
			facilities: [
				{
					id: 'sacramento',
					title:"LE FIVE West Sacramento",
					desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis.",
					img: sacramentoimg,
					loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
					mail: "contact-west-sacramento@lefive.us",
					phone:"916-248-5557",
					calendar:"Business hours"
				},
				{
					id: 'other',
					title:"LE FIVE Other",
					desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
					img:"",
					loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
					mail: "contact-west-other@lefive.us",
					phone:"916-248-5557",
					calendar:"Business hours"
				},
				{
					id: 'foo',
					title:"LE FIVE Foo",
					desc:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
					img:"",
					loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
					mail: "contact-west-foo@lefive.us",
					phone:"916-248-5557",
					calendar:"Business hours"
				}
			]
		}
	  }


	  handleChange = (event) => {
		this.state.selectedFac = event.target.value;
		const facilitiesMap = new Map();

		for(const facility of this.state.facilities){
			if(this.state.selectedFac == facility.id){
				if(document.getElementById('facility_img')){
					document.getElementById("facility_img").remove('img');
				}
				ReactDOM.render(facility.title, document.getElementById('facility_title'));
				ReactDOM.render(facility.desc, document.getElementById('facility_desc'));

				let imgFacility = document.createElement("img");
				imgFacility.src = facility.img;
				imgFacility.setAttribute("id", "facility_img");
				let src = document.getElementById("content_facilityimg");
				src.appendChild(imgFacility);

				ReactDOM.render(facility.loc, document.getElementById('facility_loc'))
				ReactDOM.render(facility.mail, document.getElementById('facility_phone'))
				ReactDOM.render(facility.phone, document.getElementById('facility_mail'))
				ReactDOM.render(facility.calendar, document.getElementById('facility_calendar'))
			}
		}

		};
  
	  handleClose = () => {
		  this.state.openState = false;
		};
	  
	  handleOpen = () => {
		  this.state.openState = true;
		};
	  
	componentDidMount() {
	
		$(".menuMain").css("display", "none");
		$(".burgerButton").css("background-color", "#D51317");
		$(".crossBack").css("display", "none");
		$(".burgerImage").css("display", "block")
		$("body").css("overflow", "")


	}
	openMenu = () => {
		console.log(this.state.selectedFac);

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

	// handleChange = (value) => {
	// 	this.setState({selectedFac: value});
	// 	console.log(value);
	// }

  	render(){
		const { classes } = this.props;


		const [facility, setFacility] = this.state.selectedFac;
		const [open, setOpen] = this.state.openState;
	  
		const facilities = new Map();

		facilities.set('sacramento', {
			id: 'sacramento',
			title:"LE FIVE West Sacramento",
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis.",
			img:"",
			loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
			phone:"916-248-5557",
			calendar:"Business hours"
		})
		facilities.set('other', {
			id: 'other',
			title:"LE FIVE Other",
			desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			img:"",
			loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
			phone:"916-248-5557",
			calendar:"Business hours"
		})
		facilities.set('foo', {
			id: 'foo',
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
					<div className="p-2 selectBox">
						<Button className={this.state.button} onClick={this.handleOpen}>
							Filter
						</Button>
						<FormControl className={this.state.formControl}>
							<InputLabel id="demo-controlled-open-select-label">Our facilities</InputLabel>
							<Select
							labelId="demo-controlled-open-select-label"
							id="demo-controlled-open-select"
							open={open}
							onClose={this.handleClose}
							onOpen={this.handleOpen}
							value={facility}
							onChange={this.handleChange}
							>
							<MenuItem value={'sacramento'}>LE FIVE West Sacramento</MenuItem>
							<MenuItem value={'other'}>LE FIVE Other</MenuItem>
							<MenuItem value={'foo'}>LE FIVE Foo</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
			</div>


			<div className="row">
				<div className="pb-4 col">
					<h2 className="p-4 facilityTitle" id="facility_title"></h2>
					<span className="facilityDesc" id="facility_desc"></span>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6 col-12">
					<img src={map} className="facilityMap" id="facility_map"></img>
				</div>
				<div className="col-lg-6 col-12">
					<div className="" id="content_facilityimg">

					</div>
					<div className="row">
						<div className="col contentFacility">
							<span><img src={pinicon}></img> <span className="facilityText" id="facility_loc"></span></span>
							<span><img src={mailicon}></img> <span className="facilityText" id="facility_phone"></span></span>
							<span><img src={phoneicon}></img> <span className="facilityText" id="facility_mail"></span></span>
							<span><img src={calendicon}></img> <span className="facilityText" id="facility_calendar"></span></span>
						</div>
						<div className="col">
							<img src={instagram}></img>
							<img src={facebook}></img>
						</div>

					</div>
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