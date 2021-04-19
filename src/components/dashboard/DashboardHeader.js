/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/SM3.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FCFBFF',
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 5,
  },
  options: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '20%',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  optionText: {
    display: 'block',
    marginLeft: theme.spacing(1),
    color: theme.palette.gray.main,
    fontSize: '0.75rem',
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },
  icon: {
    color: theme.palette.primary.main,
    width: '1rem',
    height: '1rem',
  },
}));

const DashboardHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} style={{ height: '35px' }} alt="logo" />
      <div className={classes.options}>
        <div className={classes.option} />
      </div>
    </div>
  );
};

export default DashboardHeader;
