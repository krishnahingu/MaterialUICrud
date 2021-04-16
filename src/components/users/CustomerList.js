import React from 'react';
import { array } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from '@material-ui/core';
import CustomerRow from './CustomerRow';
import VIEW_TYPE from '../../utils/constants/eventTypes';

const TableHeadCell = withStyles((theme) => ({
  root: {
    textTransform: 'uppercase',
    color: theme.palette.gray.main,
    fontSize: '1.00rem',
    fontWeight: 'bold',
  },
}))(TableCell);
const TableBodyCell = withStyles((theme) => ({
  root: {
    fontSize: '1.00rem',
    borderBottom: 'none',
    fontWeight: 'bold',
  },
}))(TableCell);

const CustomerList = ({ users, view, setView, newuser, setNewUser, setUpdateUser }) => {
  const customerListItems = users.map(({
    id,
    first_name,
    last_name,
  }, index) => (
    <CustomerRow
      index={index}
      key={id}
      id={id}
      customerGroup={first_name}
      customerName={last_name}
      setView={setView}
      setUpdateUser={setUpdateUser}
    />
  ));

  const firstnameChange = (e) => {
    setNewUser({ ...newuser, first_name: e.target.value, email: newuser?.first_name + '@' + newuser?.last_name + '.com' });
  }
  const lastnameChange = (e) => {
    setNewUser({ ...newuser, last_name: e.target.value, email: newuser?.first_name + '@' + newuser?.last_name + '.com' });
  }

  // TODO: May need to make table component
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell size="small">Sequence</TableHeadCell>
            <TableHeadCell size="small">Customer Group</TableHeadCell>
            <TableHeadCell size="small">Customer Name</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customerListItems}
          {view === VIEW_TYPE.UPDATE_VIEW ? (
            <>
              <TableBodyCell size="small">
              </TableBodyCell>
              <TableBodyCell size="small">
                <TextField id="standard-basic" label="" autoFocus={true} size="small" onChange={(e) => firstnameChange(e)} variant="outlined" />
              </TableBodyCell>
              <TableBodyCell size="small">
                <TextField id="standard-basic" label="" size="small" onChange={(e) => lastnameChange(e)} variant="outlined" />
              </TableBodyCell>
            </>
          ) : ''}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

CustomerList.propTypes = {
  users: array.isRequired,
};

export default CustomerList;
