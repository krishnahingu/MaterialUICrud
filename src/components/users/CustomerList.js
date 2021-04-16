import React, { useState } from 'react';
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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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

  const [groupSort ,setGroupSort] = useState(true);
  const [fieldName ,setFieldName] = useState('first_name');
  const sorDataOnGroup = () => {
    const temp = [...users];
    temp.sort((a, b) => {
      let fa = a[fieldName].toLowerCase(),
          fb = b[fieldName].toLowerCase();
      if (fa < fb) {
          return (groupSort) ? 1 : -1;
      }
      if (fa > fb) {
          return (groupSort) ? -1 : 1;
      }
      return 0;
    });
    return [...temp];
  }
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
    setNewUser({ ...newuser, first_name: e.target.value, email: newuser?.first_name + '@' + newuser?.last_name + '.com' });
  }
  const lastnameChange = (e) => {
    setNewUser({ ...newuser, last_name: e.target.value, email: newuser?.first_name + '@' + newuser?.last_name + '.com' });
  }
  const customSort = (fieldName) => {
    setFieldName(fieldName)
    setGroupSort(!groupSort)
  }
  
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell size="small">Sequence</TableHeadCell>
            <TableHeadCell size="small" onClick={()=>customSort('first_name')}>Customer Group {  fieldName==='first_name' ? ( groupSort ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/> ) :''} </TableHeadCell>
            <TableHeadCell size="small" onClick={()=> customSort('last_name')}>Customer Name {  fieldName==='last_name' ? ( groupSort ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/>) : ''}</TableHeadCell>
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
