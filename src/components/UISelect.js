import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



class UISelect extends React.Component {

	constructor(props) {
		super(props);
    props = {
      onSelectedFac: (value) =>{
        return value;
      }
    }
		this.state = {
			context: props.context,
			menuOpened: false,
			selectedFac: "",
      openState: "",
        button: {
          display: 'block',
          marginTop: '2em',
        },
        formControl: {
          margin: '10px',
          minWidth: 120,
        },
		  }
	  }


    handleChange = (event) => {
      this.state.selectedFac = event.target.value;
      this.props.onSelectedFac(event.target.value);
      return event.target.value;
      };

    handleClose = () => {
        this.state.openState = false;
      };
    
    handleOpen = () => {
        this.state.openState = true;
      };

  	render(){

      const { classes } = this.props;


      const [facility, setFacility] = this.state.selectedFac;
      const [open, setOpen] = this.state.openState;
    
      // const handleChange = (event) => {
      // this.state.selectedFac = event.target.value;

      // };
    


      return (
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
      );
    }
  }

export {UISelect};