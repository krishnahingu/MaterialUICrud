import { Button, makeStyles, TextField } from '@material-ui/core';
import { func, number } from 'prop-types';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetailsSuccess } from '../../store/actions/events';

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

  spacesbutton: {
    margin: '10px',
  },
  textbutton: {
    margin: '20px',
    paddingRight: '40px'
  },
  lableText: {
    paddingLeft: '25px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
}));

const UpdateCustomer = ({ setView, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.events.users);
  const updateCustName = users.filter((user) => user.id === id)[0];
  const [updateName, setUpdateNmae] = useState(updateCustName?.last_name);
  const udpateCustomer = () => {
    const tempCusName = users.filter((user) => user.id !== id);
    dispatch(fetchUserDetailsSuccess([...tempCusName, { ...updateCustName, last_name: updateName }]));
    setView(0);
  };
  const deleteCustomer = () => {
    const tempCustNames = users.filter((user) => user.id !== id);
    dispatch(fetchUserDetailsSuccess(tempCustNames));
    setView(0);
  };
  const deleteName = () => {
    const tempCusName = users.filter((user) => user.id !== id);
    dispatch(fetchUserDetailsSuccess([...tempCusName, { ...updateCustName, last_name: '' }]));
    setView(0);
  };

  return (
    <div className={classes.updateView}>
      <div className={classes.lableText}> Name:</div>
        <TextField
          id="standard-basic"
          value={updateName}
          size="small"
          tabIndex={0}
          autoFocus
          fullWidth
          className={classes.textbutton}
          onChange={(e) => setUpdateNmae(e.target.value)}
          variant="outlined"
        />

        <div className={classes.buttonView}>
          <Button
            variant="contained"
            color="success"
            tabIndex={0}
            fullWidth
            className={classes.spacesbutton}
            onClick={udpateCustomer}
          >
            Save
          </Button>
          <Button
            variant="contained"
            tabIndex={0}
            fullWidth
            color="secondary"
            className={classes.spacesbutton}
            onClick={deleteName}
          >
            Delete Name
          </Button>
        <Button
          variant="contained"
          tabIndex={0}
          fullWidth
          color="secondary"
          className={classes.spacesbutton}
          onClick={deleteCustomer}
        >
            Delete Record
        </Button>
        </div>
    </div>
  );
};

UpdateCustomer.propTypes = {
  id: number.isRequired,
  setView: func.isRequired,
};

export default UpdateCustomer;
