import { CircularProgress, makeStyles } from '@material-ui/core';
import { bool } from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    loading: {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Loader = ({
    hide
}) => {
    const classes = useStyles();
    if (!hide) {
        return '';
    }
    return (
        <div className={classes.loading}>
            <CircularProgress />
        </div>
    );
};
Loader.propTypes = {
    hide: bool
  };

export default Loader;
