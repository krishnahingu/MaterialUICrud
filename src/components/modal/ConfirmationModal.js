import React from 'react';
import { func, node } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

const ConfirmationModal = ({ onClose, children, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DialogTitle>
        Confirm
        <IconButton aria-label="close" className={classes.closeIcon} onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      {children}
    </div>
  );
};

ConfirmationModal.propTypes = {
  onClose: func.isRequired,
  children: node.isRequired,
};

export default ConfirmationModal;
