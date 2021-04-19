import {
  Button, makeStyles
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import Tips from '../../components/tips/Tips';
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
  textButton: {
    margin: '20px',
    paddingRight: '40px'
  },
  addButton: {
    marginTop: '25px',
  },
}));

const Customer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.events.users);
  const { isLoading } = useSelector((state) => state.loading);
  const [view, setView] = useState(0);
  const [newuser, setNewUser] = useState();
  const [udpateUser, setUpdateUser] = useState();

  useEffect(() => {
    dispatch(fetchUserDetailsInit());
  }, [dispatch]);

  const saveuser = () => {
    setView(0);
    if (newuser) { dispatch(addUsers(newuser)); }
  };
  const insertUser = () => {
    setView(1);
    setNewUser(null);
  };

  const rederView = () => {
    if (view === VIEW_TYPE.DELETE_VIEW) {
      return <UpdateCustomer setView={setView} id={udpateUser} />;
    }
    let buttonContainer = null;
    switch (view) {
      case VIEW_TYPE.ADD_VIEW:
        buttonContainer = (
          <div className={classes.updateView}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              tabIndex={0}
              className={classes.addButton}
              onClick={insertUser}
            >
              Add New
            </Button>
          </div>
        );
        break;
      case VIEW_TYPE.UPDATE_VIEW:
        buttonContainer = (
          <div className={classes.buttonView}>
            <Button
              variant="contained"
              color="success"
              tabIndex={0}
              onClick={saveuser}
              className={classes.textButton}
              fullWidth
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              tabIndex={0}
              fullWidth
              className={classes.textButton}
              onClick={() => setView(0)}
            >
              Cancel
            </Button>
          </div>
        );
        break;
        default:
    }
    return (
      <>
        <CustomerList
          users={users}
          view={view}
          setView={setView}
          newuser={newuser}
          setUpdateUser={setUpdateUser}
          setNewUser={setNewUser}
        />
        {buttonContainer}
      </>
    );
  };

  return (
    <ReactFocusLock>
      <h1>Customers</h1>
      <Loader hide={isLoading} />
      {rederView()}
      <Tips text="Tip : Use Tab or Shift + Tab  to select option without mouse." />
    </ReactFocusLock>
  );
};

export default Customer;
