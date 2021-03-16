import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
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
                <IconButton aria-label="delete" color="primary">
                    <DeleteIcon />
                </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}

export default DepartamentoRow;