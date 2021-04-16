import React from 'react';
import { string } from 'prop-types';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
    backgroundColor: '#FFF1F0',
    marginTop: theme.spacing(1),
    fontSize: '1rem',
  },
}));

const ErrorAlert = ({ message }) => {
  const classes = useStyles();
  return (
    <Alert
      severity="error"
      variant="outlined"
      classes={{ outlinedError: classes.root }}
    >
      {message}
    </Alert>
  );
};

ErrorAlert.propTypes = {
  message: string.isRequired,
};

export default ErrorAlert;
