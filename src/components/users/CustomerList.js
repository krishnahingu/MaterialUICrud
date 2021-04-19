import React, { useState } from 'react';
import { array, func, string } from 'prop-types';
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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
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

const CustomerList = ({
 users, view, setView, newuser, setNewUser, setUpdateUser
}) => {
  const [groupSort, setGroupSort] = useState(true);
  const [fieldName, setFieldName] = useState('first_name');
  const sorDataOnGroup = () => {
    const temp = [...users];
    temp.sort((a, b) => {
      const fa = a[fieldName].toLowerCase();
          const fb = b[fieldName].toLowerCase();
      if (fa < fb) {
          return (groupSort) ? 1 : -1;
      }
      if (fa > fb) {
          return (groupSort) ? -1 : 1;
      }
      return 0;
    });
    return [...temp];
  };
  const data = sorDataOnGroup();
  const customerListItems = data.map(({
    id,
    first_name,
    last_name,
  }, index) => (
    <CustomerRow
      index={index}
      key={id}
      id={id}
      view={view}
      customerGroup={first_name}
      customerName={last_name}
      setView={setView}
      setUpdateUser={setUpdateUser}
    />
  ));

  const firstnameChange = (e) => {
    const email = `${newuser?.first_name}@${newuser?.last_name}.com`;
    setNewUser({ ...newuser, first_name: e.target.value, email });
  };
  const lastnameChange = (e) => {
    const email = `${newuser?.first_name}@${newuser?.last_name}.com`;
    setNewUser({ ...newuser, last_name: e.target.value, email });
  };
  const customSort = (name) => {
    setFieldName(name);
    setGroupSort(!groupSort);
  };
  const isUpSort = groupSort ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
  const isFirstNameSort = fieldName === 'first_name';
  const isLastNameSort = fieldName === 'last_name';
  const isUpdateView = view === VIEW_TYPE.UPDATE_VIEW;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell size="small">Sequence</TableHeadCell>
            <TableHeadCell size="small" onClick={() => customSort('first_name')}>Customer Group { isFirstNameSort && isUpSort } </TableHeadCell>
            <TableHeadCell size="small" onClick={() => customSort('last_name')}>Customer Name { isLastNameSort && isUpSort }</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customerListItems}
          {isUpdateView && (
            <>
              <TableBodyCell size="small" />
              <TableBodyCell size="small">
                <TextField id="standard-basic" label="" autoFocus size="small" onChange={(e) => firstnameChange(e)} variant="outlined" />
              </TableBodyCell>
              <TableBodyCell size="small">
                <TextField id="standard-basic" label="" size="small" onChange={(e) => lastnameChange(e)} variant="outlined" />
              </TableBodyCell>
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CustomerList.propTypes = {
  users: array.isRequired,
  view: string.isRequired,
  setView: func.isRequired,
  newuser: string.isRequired,
  setNewUser: func.isRequired,
  setUpdateUser: func.isRequired
};

export default CustomerList;
