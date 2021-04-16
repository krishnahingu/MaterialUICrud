/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { PersonOutlineOutlined, ExitToApp } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import crowdflikLogo from '../../assets/images/SM3.jpeg';

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
    'cursor': 'pointer',
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
  const dispatch = useDispatch();

  const onLogout = (e) => {
  };

  return (
    <div className={classes.root}>
      <img src={crowdflikLogo} style={{height:'35px'}} alt="CrowdFlik" />

      <div className={classes.options}>
        <div className={classes.option}>
          {/* <PersonOutlineOutlined className={classes.icon} />
          <div className={classes.optionText}>Krishna hingu</div>
        </div>

        <div className={classes.option}>
          <ExitToApp className={classes.icon} />
          <a
            className={clsx(classes.link, classes.optionText)}
            onClick={onLogout}
          >
            Log out
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
