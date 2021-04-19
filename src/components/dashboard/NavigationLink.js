import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { element, string } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    color: theme.palette.gray.main,
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    width: '95%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    margin: `${theme.spacing(1.5)}px 0`,
    '&:hover': {
      backgroundColor: 'rgba(124, 78, 255, 0.3)',
      color: theme.palette.primary.main,
    },
  },
  icon: {
    fontWeight: 'normal',
    marginRight: theme.spacing(1),
  },
  active: {
    backgroundColor: 'rgba(124, 78, 255, 0.3)',
    color: theme.palette.primary.main,
  },
}));

const NavigationLink = ({ href, text, IconComponent }) => {
  const classes = useStyles();

  const isActive = (match, location) => {
    if (text === 'Event Management' && location.pathname.includes('events')) {
      return true;
    }
    return match?.isExact || false;
  };

  return (
    <NavLink
      to={href}
      className={classes.root}
      alt={text}
      activeClassName={classes.active}
      isActive={isActive}
    >
      <IconComponent className={classes.icon} />
      {text}
    </NavLink>
  );
};
NavigationLink.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
  IconComponent: element.isRequired,
};

export default NavigationLink;
