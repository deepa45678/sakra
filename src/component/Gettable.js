import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, Name, UserName, Email) {
 return { id, Name, UserName, Email};
}

const rows = [
 createData(1,'Leanne Graham','Bret','Sincere@april.biz' ),
 createData(2,'Ervin Howell','Antonette','Shanna@melissa.tv'),
 createData(3, 'Clementine Bauch','Samantha','Nathan@yesenia.net'),
 createData(4,'Patricia Lebsack','Karianne','Julianne.OConner@kory.org'),
];

export default function BasicTable() {
 return (
 <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
 <TableHead>
 <TableRow>
 <TableCell>People</TableCell>
 <TableCell align="right">id</TableCell>
 <TableCell align="right">Name&nbsp;</TableCell>
 <TableCell align="right">UserName&nbsp;</TableCell>
 <TableCell align="right">Email&nbsp;</TableCell>
 </TableRow>
 </TableHead>
 <TableBody>
 {rows.map((row) => (
 <TableRow
 key={row.name}
 sx={{ '&:last-child td, &:last-child th': { border: 0} }}
 >
 <TableCell component="th" scope="row">
 {row.name}
 </TableCell>
 <TableCell align="right">{row.id}</TableCell>
 <TableCell align="right">{row.Name}</TableCell>
 <TableCell align="right">{row.UserName}</TableCell>
 <TableCell align="right">{row.Email}</TableCell>
 </TableRow>
 ))}
 </TableBody>
 </Table>
 </TableContainer>
 );
}