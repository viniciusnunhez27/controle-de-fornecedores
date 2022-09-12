
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function Mtable () {

const [forncedores, setFornecedores] = useState ([])




useEffect(() => { 
  fetch("http://localhost:3000/fornecedores")
  .then(response => response.json())
  .then(data => setFornecedores(data))
}, [])

 
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome fornecedor</StyledTableCell>
            <StyledTableCell align="right">Empresa</StyledTableCell>
            <StyledTableCell align="right">Estado</StyledTableCell>
            <StyledTableCell align="right">Ramo</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forncedores.map((fornecedores) => (
            <StyledTableRow key={fornecedores.id}>
              <StyledTableCell component="th" scope="row">
                {fornecedores.name}
              </StyledTableCell>
              <StyledTableCell align="right">{fornecedores.name}</StyledTableCell>
              <StyledTableCell align="right">{fornecedores.estado}</StyledTableCell>
              <StyledTableCell align="right">{fornecedores.ramo}</StyledTableCell>
              <StyledTableCell align="right"><Button text={forncedores.status}></Button></StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Mtable;