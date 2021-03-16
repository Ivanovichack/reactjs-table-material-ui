import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class DepartamentoRow extends Component {
    render(){
        return(
            <TableRow key={this.props.id}>
                <TableCell align="right" component="th" scope="row">{this.props.id}</TableCell>
                <TableCell align="right">{this.props.name}</TableCell>
                <TableCell align="right">{this.props.manager}</TableCell>
                <TableCell align="right">{this.props.localizacion}</TableCell>
                <TableCell align="right">
                    <Button size="small" variant="contained" color="secondary">Eliminar</Button>
                </TableCell>
            </TableRow>
        );
    }
}

export default DepartamentoRow;