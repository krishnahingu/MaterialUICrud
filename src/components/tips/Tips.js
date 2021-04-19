import { Card, makeStyles } from '@material-ui/core';
import { string } from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '46px',
    margin: '30px',
    backgroundColor: 'aliceblue',
    fontSize: '20px',
    lineHeight: '22px',
    display: 'flex',
    alignItems: 'center',
  },
}));

const Tips = ({ text }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      {text}
    </Card>
  );
};
Tips.propTypes = {
  text: string,
};

export default Tips;
