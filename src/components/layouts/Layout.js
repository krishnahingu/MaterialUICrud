import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { oneOfType, arrayOf, node } from 'prop-types';

import DashboardHeader from '../dashboard/DashboardHeader';
import DashboardNavigation from '../dashboard/DashboardNavigation';

const useStyles = makeStyles((theme) => ({
  layoutRoot: {
    margin: '0 auto',
    maxWidth: 1440,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentRoot: {
    flex: 1,
    display: 'flex',
    height: '100%',
  },
  content: {
    width: '82%',
    flexBasis: '82%',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: '#fff',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layoutRoot}>
      <DashboardHeader />
      <div className={classes.contentRoot}>
        <DashboardNavigation />
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

export default Layout;
