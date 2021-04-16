import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PersonOutlineOutlined, BarChartOutlined, EventNoteOutlined } from '@material-ui/icons';

import NavigationLink from './NavigationLink';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    backgroundColor: '#F5F6FE',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
  },
}));

const DashboardNavigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationLink
        href="/customer"
        text="Customer"
        IconComponent={BarChartOutlined}
      />
    </div>
  );
};

export default DashboardNavigation;
