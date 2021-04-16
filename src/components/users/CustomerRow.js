import React from 'react';
import clsx from 'clsx';
import { string, number, func } from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from '@material-ui/core';

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
  setUpdateUser
}) => {
  const classes = useStyles();
  const isRowColored = index % 2 === 0;
  return (
    <TableRow key={key} classes={{ root: clsx(classes.root, { [classes.colored]: isRowColored }) }}>
      <TableBodyCell size="small">{id}</TableBodyCell>
      <TableBodyCell size="small">{customerGroup}</TableBodyCell>
      <TableBodyCell size="small" onClick={()=>{ setUpdateUser(id);setView(2)}}>{customerName}</TableBodyCell>
    </TableRow>
  );
};

CustomerRow.propTypes = {
  id: number.isRequired,
  index: number.isRequired,
  key:number.isRequired,
  customerGroup:string.isRequired,
  customerName:string.isRequired,
  setView:func.isRequired,
  setUpdateUser:func.isRequired

};

export default CustomerRow;
