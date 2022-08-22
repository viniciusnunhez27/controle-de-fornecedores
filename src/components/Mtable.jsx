import React, { useState, useEffect } from 'react';
import { makeStyles, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';


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


function Mtable() {

const [fornecedores, setFornecedores] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/fornecedores")
    .then(response  => response.json())
    .then(data => {
      setFornecedores(data) 
    })
}, [])


  return (
    <div>
     <h1 className='header'>Lista de Forncedores</h1>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 1000}} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Nome</StyledTableCell>
          <StyledTableCell align="right">Pais</StyledTableCell>
          <StyledTableCell align="right">Estado</StyledTableCell>
          <StyledTableCell align="right">Telefone</StyledTableCell>
          <StyledTableCell align="right">Ramo</StyledTableCell>
          <StyledTableCell align="right">Status</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fornecedores.map((fornecedor) => (
          <StyledTableRow key={fornecedores.id}>
          <StyledTableCell component="th" scope="row">
          {fornecedor.name}
          </StyledTableCell>
          <StyledTableCell align="right">{fornecedor.pais}</StyledTableCell>
          <StyledTableCell align="right">{fornecedor.estado}</StyledTableCell>
          <StyledTableCell align="right">{fornecedor.telefone}</StyledTableCell>
          <StyledTableCell align="right">{fornecedor.ramo}</StyledTableCell>
          <StyledTableCell align="right"><Button color='inherit'   style={{
             color: 'White',  
             backgroundColor:
             ((fornecedor.status === 'Ativo' && 'green')) ||
             (fornecedor.status === 'Inativo' && 'red')
            }}
            >
            {fornecedor.status}
          </Button></StyledTableCell>
     

        </StyledTableRow>
      ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
 );
}

  
    

export default Mtable;