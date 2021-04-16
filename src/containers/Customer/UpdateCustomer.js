import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetailsSuccess } from '../../store/actions/events';
import { FocusOn ,AutoFocusInside} from 'react-focus-on';
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  updateView: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '10px',
  },

  spacesbutton:{
    margin:'10px',
  },
  textbutton:{
    margin:'20px',
    paddingRight:'40px'
  },
  LableText:{
    paddingLeft:'25px',
    fontSize:'16px',
    fontWeight:'bold'
  }
}));

const UpdateCustomer = ({ setView, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.events.users);
  const updateCustName = users.filter(user => user.id === id)[0];
  const [updateName, setUpdateNmae] = useState(updateCustName?.last_name);
  const udpateCustomer = () => {
    const tempCusName = users.filter(user => user.id !== id);
    dispatch(fetchUserDetailsSuccess([...tempCusName, { ...updateCustName, last_name: updateName }]));
    setView(0);
  };
  const deleteCustomer = () => {
    const tempCustNames = users.filter(user => user.id !== id);
    dispatch(fetchUserDetailsSuccess(tempCustNames));
    setView(0);
  };
  const deleteName = () => {
    const tempCusName = users.filter(user => user.id !== id);
    dispatch(fetchUserDetailsSuccess([...tempCusName, { ...updateCustName, last_name: '' }]));
    setView(0);
  };


  return (
    <div className={classes.updateView}>
      <div className={classes.LableText}> Name:</div>
        <TextField id="standard-basic"
          value={updateName}
          size="small"
          tabIndex={1}
          autoFocus={true} 
          fullWidth={true}
          className={classes.textbutton}
          onChange={(e) => setUpdateNmae(e.target.value)} variant="outlined" />
        
        <div className={classes.buttonView}>
          <Button variant="contained"
            color="success"
            tabIndex={2}
            fullWidth={true}
            className={classes.spacesbutton}
            onClick={udpateCustomer}
          >
            Save
         </Button>
          <Button variant="contained"
            tabIndex={3}
            fullWidth={true}
            color="secondary"
            className={classes.spacesbutton}
            onClick={deleteName}
          >
            Delete Name
        </Button>
        <Button variant="contained"
            tabIndex={3}
            fullWidth={true}
            color="secondary"
            className={classes.spacesbutton}
            onClick={deleteCustomer}
          >
            Delete Record
        </Button>
        </div>
     
    </div>

  )
};

export default UpdateCustomer;
