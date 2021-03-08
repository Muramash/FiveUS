import React, { Component } from 'react'
import $ from 'jquery';

import './css/Facilities.css'
import { SecondHeader } from './../components/SecondHeader.js'
import { MainMenu } from './../components/MainMenu.js'
import { Footer } from './../components/Footer.js'
import { UISelect }  from './../components/UISelect.js'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


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
			facilities: {
				sacramento: {
					id: 'sacramento',
					title:"LE FIVE West Sacramento",
					desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis. Proin arcu leo, tincidunt eget tincidunt non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus vitae dapibus iaculis.",
					img:"",
					loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
					phone:"916-248-5557",
					calendar:"Business hours"
				},
				other: {
					id: 'other',
					title:"LE FIVE Other",
					desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
					img:"",
					loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
					phone:"916-248-5557",
					calendar:"Business hours"
				},
				foo: {
					id: 'foo',
					title:"LE FIVE Foo",
					desc:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
					img:"",
					loc:"3940 Seaport Blvd Suite #200 West Sacramento, CA 95691",
					phone:"916-248-5557",
					calendar:"Business hours"
				}
			}
		}
	  }


	  handleChange = (event) => {
		this.state.selectedFac = event.target.value;
		const facilitiesMap = new Map();

		console.log(this.state.facilities)
		Object.keys(this.state.facilities).map(i => Object.values(this.state.facilities).map(j => facilitiesMap.set([i,j])))
		console.log(facilitiesMap);

		// facilities.forEach((facility, key)=>{
		// 	if(this.state.selectedFac == facility.id){
		// 		console.log("found")
		// 	}
		// 	console.log("key is :", key);
		// 	console.log("value is :", facility);
		// 	})
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
					<div className="selectBox">
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

			<div className="largeSpacer-3">
				
			</div>

			<div className="row">
				<div className="col">
					{/* {this.facilities.map((value, index) => {
						return <li key={index}>{value}</li>;
					})} */}
					{/* it's : {facilities.get(this.state.selectedFac).title}  */}
					it's : {facilities.forEach((facility, key)=>{
						if(this.state.selectedFac == facility.id){
							console.log("found")
						}
						console.log("key is :", key);
						console.log("value is :", facility);
						return(
						<p>{facility.title}</p>
						)
					})}	

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