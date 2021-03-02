import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export default function UISelect() {
  const classes = useStyles();
  const [facility, setFacility] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
	setFacility(event.target.value);
	this.props.parentCallBack(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="selectBox">
      <Button className={classes.button} onClick={handleOpen}>
        Filter
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Our facilities</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={facility}
          onChange={handleChange}
        >
          <MenuItem value={'sacramento'}>LE FIVE West Sacramento</MenuItem>
          <MenuItem value={'other'}>LE FIVE Other</MenuItem>
          <MenuItem value={'foo'}>LE FIVE Foo</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export {UISelect};