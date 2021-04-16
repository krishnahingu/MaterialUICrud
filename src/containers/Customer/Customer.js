import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { useDispatch, useSelector } from 'react-redux';
import CustomerList from '../../components/users/CustomerList';
import { fetchUserDetailsInit, addUsers } from '../../store/actions/events';
import VIEW_TYPE from '../../utils/constants/eventTypes';
import UpdateCustomer from './UpdateCustomer';


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
  addButton: {
    marginTop: '25px',
  },
  LableText: {
    paddingLeft: '25px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  loading:{
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


const Customer = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.events.users);
  const {isLoading } = useSelector((state) => state.loading);
  const [view, setView] = useState(0);
  const [newuser, setNewUser] = useState();
  const [udpateUser, setUpdateUser] = useState();

  useEffect(() => {
    dispatch(fetchUserDetailsInit());
  }, [dispatch]);

  const saveuser = () => {
    setView(0);
    if (newuser)
      dispatch(addUsers(newuser));
  };
  const insertUser = () => {
    setView(1);
    setNewUser(null)
  };


  return (
    <ReactFocusLock >
      <h1>Customers</h1>
      {isLoading && 
      <div className={classes.loading}>
      <CircularProgress />
    </div>}
      { view !== VIEW_TYPE.DELETE_VIEW  ? <CustomerList users={users} view={view} setView={setView} newuser={newuser} setUpdateUser={setUpdateUser} setNewUser={setNewUser} /> : ''}
      { view === VIEW_TYPE.ADD_VIEW ? (
        <div className={classes.updateView}>
          <Button variant="contained"
            fullWidth={true}
            color="primary"
            tabIndex={0}
            className={classes.addButton}
            onClick={insertUser}
          >
            Add New
        </Button>
        </div>
      ) : ''}
      { view === VIEW_TYPE.UPDATE_VIEW ? (
        <div className={classes.buttonView}>
          <Button variant="contained"
            color="success"
            tabIndex={3}
            onClick={saveuser}
            className={classes.textbutton}
            fullWidth={true}
          >
            Save
          </Button>
          <Button variant="contained"
            color="secondary"
            tabIndex={4}
            fullWidth={true}
            className={classes.textbutton}
            onClick={() => setView(0)}
          >
            Cancel
          </Button>
        </div>) : ''}
      { view === VIEW_TYPE.DELETE_VIEW ? <UpdateCustomer setView={setView} id={udpateUser} /> : ''}

    </ReactFocusLock >
  );
};

export default Customer;