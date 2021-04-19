import React from 'react';
import clsx from 'clsx';
import { string, number, func } from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TableRow, TableCell, Button } from '@material-ui/core';
import VIEW_TYPE from '../../utils/constants/eventTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: 'none',
  },
  thumbnail: {
    width: 54,
    height: 32,
    borderRadius: 2,
  },
  colored: {
    backgroundColor: '#F3F3FC',
  },
}));

const TableBodyCell = withStyles((theme) => ({
  root: {
    fontSize: '1.00rem',
    borderBottom: 'none',
    fontWeight: 'normal',
  },
}))(TableCell);

const CustomerRow = ({
  id,
  key,
  index,
  customerGroup,
  customerName,
  setView,
  view,
  setUpdateUser
}) => {
  const classes = useStyles();
  const isRowColored = index % 2 === 0;
  return (
    <TableRow key={key} classes={{ root: clsx(classes.root, { [classes.colored]: isRowColored }) }}>
      <TableBodyCell size="small">{index + 1}</TableBodyCell>
      <TableBodyCell size="small">{customerGroup}</TableBodyCell>
      <Button tabIndex={(view === VIEW_TYPE.UPDATE_VIEW) ? -1 : index + 1} onClick={() => { setUpdateUser(id); setView(2); }}>
        <TableBodyCell size="small">{customerName}</TableBodyCell>
      </Button>

    </TableRow>
  );
};

CustomerRow.propTypes = {
  id: number.isRequired,
  index: number.isRequired,
  key: number.isRequired,
  customerGroup: string.isRequired,
  customerName: string.isRequired,
  view: string.isRequired,
  setView: func.isRequired,
  setUpdateUser: func.isRequired

};

export default CustomerRow;
